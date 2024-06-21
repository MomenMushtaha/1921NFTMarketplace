import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { IoMdSnow } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';

import Header from '../../components/Header';
import GeneralDetails from '../../components/nft/GeneralDetails';
import ItemActivity from '../../components/nft/ItemActivity';
import { sanityClient } from '../../sanity';
import { client } from '../../lib/sanityClient';
import Purchase from '../../components/nft/Purchase';
import { urlFor } from '../../sanity';
import NFTImage from '../../components/nft/NFTImage';
import { TransactionContext } from '../../context/TransactionContext';
import TransactionLoader from '../../components/TransactionLoader';
import Footer from '../../components/Footer';
import WelcomeUser from '../../components/toast/WelcomeUser';

// Set the root element for the modal to avoid accessibility issues
Modal.setAppElement('#__next');

// Styles for various elements in the Nft component
const style = {
  wrapper: `flex flex-col items-center container-lg text-[#ffcccb] overflow-hidden`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
  topBar: `bg-[#ffcccb] p-2 rounded-t-lg border-[#ffcccb] border`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-end`,
};

// Custom styles for the modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffffff',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
};

/**
 * Nft component
 *
 * This component is responsible for displaying the details of a specific NFT.
 * It fetches and displays data related to the NFT.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.selectedNft - The selected NFT.
 *
 * @returns {JSX.Element} A page for a specific NFT.
 */
const Nft = ({ selectedNft }) => {
  const { formData, NftData, handleImage, handleName, handleChange, sendTransaction, currentAccount } = useContext(TransactionContext);

  const router = useRouter();
  const { check } = router.query;

  // Set up payment details when selectedNft changes
  useEffect(() => {
    handleChange(selectedNft.price ? selectedNft.price : '0.1');
    handleImage(selectedNft.imageTest);
    handleName(selectedNft.caption);
  }, [selectedNft, handleChange, handleImage, handleName]);

  // Handle form submission to send a transaction
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { addressTo, amount } = formData;
    const { image, name } = NftData;

    // Check if all required fields are filled
    if (!addressTo || !amount || !image || !name) return;

    // Send the transaction
    sendTransaction();
  };

  return (
      <div className="overflow-hidden">
        <Header />
        <div className={style.wrapper}>
          <div className={style.container}>
            <div className={style.topContent}>
              <div className={style.nftImgContainer}>
                <NFTImage selectedNft={selectedNft.imageTest?.asset} alt={selectedNft?.caption} />
              </div>
              <div className={style.detailsContainer}>
                <GeneralDetails selectedNft={selectedNft} />
                <Purchase
                    isListed={router.query.isListed}
                    selectedNft={selectedNft}
                    buyItem={(e) => handleSubmit(e)}
                />
              </div>
            </div>
            <div className="md:visible invisible">
              <ItemActivity />
            </div>
          </div>
        </div>
        <Footer />
        <Modal isOpen={!!router.query.loading} style={customStyles}>
          <TransactionLoader />
        </Modal>
      </div>
  );
};

// Fetch data for the specific NFT from Sanity
export async function getServerSideProps(context) {
  const { nftId } = context.params;

  // GROQ query to fetch data for the specified NFT ID
  const query = `*[_type == "testImage" && _id == "${nftId}"][0]{
    caption,
    imageTest,
    price,
  }`;

  // Fetch the data from Sanity
  const items = await sanityClient.fetch(query);

  // Return 404 if no items are found
  if (!items) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    // Return the fetched data as props
    return {
      props: {
        selectedNft: items,
      },
    };
  }
}

export default Nft;
