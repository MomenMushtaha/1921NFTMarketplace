import { useRouter } from 'next/router';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { sanityClient } from '../../sanity';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';
import NftCard from '../../components/NftCard';

// Styles for various elements in the Item component
const style = {
  bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full object-cover`,
  infoContainer: `w-screen px-4`,
  midRow: `w-fit md:w-full flex justify-center text-['#f73455'] items-center`,
  endRow: `w-full flex justify-end text-['#ffcccb']`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#ffcccb] mt-[-4rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem] invisible md:visible`,
  socialIconsWrapper: `w-44`,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  title: `text-5xl font-bold mb-4`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-full md:w-[44vw] flex justify-between py-4 border border-[#ffcccb] rounded-xl mb-4`,
  collectionStat: `w-1/4 mx-[27px]`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full text-center mt-1`,
  description: `text-[#ffcccb] text-xl w-max-1/4 flex-wrap mt-4`,
};

/**
 * Item component
 *
 * This component is responsible for rendering a page for a specific contract address.
 * It fetches and displays data related to the contract address.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.imageUrl - The URL of the profile image.
 * @param {string} props.bannerImageUrl - The URL of the banner image.
 * @param {number} props.volumeTraded - The volume traded.
 * @param {string} props.createdBy - The creator of the contract.
 * @param {Array} props.nftItems - The NFT items in the contract.
 * @param {string} props.contractAddress - The contract address.
 * @param {string} props.creator - The creator of the contract.
 * @param {string} props.title - The title of the contract.
 * @param {number} props.floorPrice - The floor price of the contract.
 * @param {Array} props.allOwners - The owners of the contract.
 * @param {string} props.description - The description of the contract.
 * @param {Object} props.params - The parameters passed to the page.
 *
 * @returns {JSX.Element} A page for a specific contract address.
 */
const Item = ({
                imageUrl,
                bannerImageUrl,
                volumeTraded,
                createdBy,
                nftItems,
                contractAddress,
                creator,
                title,
                floorPrice,
                allOwners,
                description,
                params,
              }) => (
    <div className="overflow-hidden"> // overflow-hidden??
      {/* Banner Image */}
      <div className={style.bannerImageContainer}>
        <img src={bannerImageUrl} alt="Banner Image" className={style.bannerImage} />
      </div>

      <div className={style.infoContainer}>
        {/* Profile Image */}
        <div className={style.midRow}>
          <img src={imageUrl} alt="Profile Image" className={style.profileImg} />
        </div>

        {/* Social Icons */}
        <div className={style.endRow}>
          <div className={style.socialIconsContainer}>
            <div className={style.socialIconsWrapper}>
              <div className={style.socialIconsContent}>
                <div className={style.socialIcon}>
                  <CgWebsite />
                </div>
                <div className={style.divider}></div>
                <div className={style.socialIcon}>
                  <AiOutlineInstagram />
                </div>
                <div className={style.divider}></div>
                <div className={style.socialIcon}>
                  <AiOutlineTwitter />
                </div>
                <div className={style.divider}></div>
                <div className={style.socialIcon}>
                  <HiDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className={style.midRow}>
          <div className={style.title}>{title}</div>
        </div>

        {/* Created By */}
        <div className={style.midRow}>
          <div className={style.createdBy}>
            Created by <span className="text-[#f73455]">{creator}</span>
          </div>
        </div>

        {/* Stats */}
        <div className={style.midRow}>
          <div className={style.statsContainer}>
            <div className={style.collectionStat}>
              <div className={style.statValue}>{nftItems.length}</div>
              <div className={style.statName}>Items</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img
                    className={style.ethLogo}
                    src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                    alt="ETH"
                />
                {floorPrice}
              </div>
              <div className={style.statName}>Floor Price</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img
                    className={style.ethLogo}
                    src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                    alt="ETH"
                />
                {volumeTraded}.5k
              </div>
              <div className={style.statName}>Volume Traded</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={style.midRow}>
          <div className={style.description}>{description}</div>
        </div>
      </div>

      {/* NFT Cards */}
      <div className="flex flex-wrap">
        {nftItems.map((nftItem, id) => (
            <NftCard key={id} nftItem={nftItem} title={title} listing="true" />
        ))}
      </div>

      <Footer />
    </div>
);

// Fetch data for the specific NFT collection from Sanity
export const getServerSideProps = async (context) => {
  const { params } = context;
  const id = Object.values(params)[0];

  // GROQ query to fetch data for the specified contract address
  const query = `*[_type == "marketItems" && contractAddress == "${id}"][0] {
    "imageUrl": profileImage.asset->url,
    "bannerImageUrl": bannerImage.asset->url,
    volumeTraded,
    createdBy,
    contractAddress,
    "creator": createdBy->userName,
    title,
    floorPrice,
    "allOwners": owners[]->,
    "nftItems": images[]->,
    description,
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
        imageUrl: items.imageUrl,
        bannerImageUrl: items.bannerImageUrl,
        volumeTraded: items.volumeTraded,
        createdBy: items.createdBy,
        nftItems: items.nftItems,
        contractAddress: items.contractAddress,
        creator: items.creator,
        title: items.title,
        floorPrice: items.floorPrice,
        allOwners: items.allOwners,
        description: items.description,
        params,
      },
    };
  }
};

export default Item;
