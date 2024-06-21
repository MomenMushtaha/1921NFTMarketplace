import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';
import { contractABI, contractAddress } from './lib/constants';
import { client } from '../lib/sanityClient';
import WelcomeUser from '../components/toast/WelcomeUser';
import Loading from '../components/toast/Loading';

// Create context for transactions
export const TransactionContext = React.createContext();

//Checking if window object is available if so Initialize Ethereum object
let eth;
if (typeof window !== 'undefined') {
  eth = window.ethereum;
}

// Function to get Ethereum contract
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
  return transactionContract;
};

// Transaction Provider Component
export const TransactionProvider = ({ children }) => {
  // Using useState hook for various states
  const [currentAccount, setCurrentAccount] = useState();
  const [isLoading, setIsLoading] = useState();
  const [amount, setAmount] = useState();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const router = useRouter();

  const address = '0x7E219E6f983187EB35F9B2D6816DF084a616d28c';

  const formData = {
    addressTo: { address },
    amount: { amount },
  };

  const NftData = {
    image: { image },
    name: { name },
  };

  // useEffect hook to check if wallet is connected
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  // Create user profile in Sanity
  useEffect(() => {
    if (!currentAccount) return;
    (async () => {
      const userDoc = {
        _type: 'users',
        _id: currentAccount,
        userName: 'Unnamed',
        walletAddress: currentAccount,
      };
      await client.createIfNotExists(userDoc);
      WelcomeUser(userDoc.userName);
    })();
  }, [currentAccount]);

  // Function to connect wallet
  const connectWallet = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install Metamask');
      const accounts = await metamask.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
      throw new Error('No Ethereum object.');
    }
  };

  // Function to check if wallet is connected
  const checkIfWalletIsConnected = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install Metamask');
      const accounts = await metamask.request({ method: 'eth_accounts' });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        console.log('Wallet is already connected to Metamask');
      }
    } catch (error) {
      console.error(error);
      throw new Error('No Ethereum object.');
    }
  };

  // Function to send transaction
  const sendTransaction = async (metamask = eth, connectedAccount = currentAccount) => {
    try {
      if (!metamask) return alert('Please install Metamask');

      const { addressTo, amount } = formData; // Gets a destructured value for the receiver address and amount
      const { image, name } = NftData; // Gets a destructured value for the image URL and the NFT name from the useState hook

      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount.amount);
      const parsedAddress = addressTo.address;

      await metamask.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: connectedAccount,
            to: addressTo.address,
            gas: '0x7EF40', // 520000 Gwei
            value: parsedAmount._hex,
          },
        ],
      });

      const transactionHash = await transactionContract.publishTransaction(
          addressTo.address,
          parsedAmount,
          `Transferring ETH ${parsedAmount} to ${addressTo.address}`,
          'TRANSFER'
      );

      setIsLoading(true);
      Loading();

      await transactionHash.wait();

      // Save transaction in DB
      await saveTransaction(
          transactionHash.hash,
          amount.amount,
          connectedAccount,
          parsedAddress,
          image.image,
          name.name
      );

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle amount change
  const handleChange = (price) => setAmount(price);

  // Function to handle image change
  const handleImage = (image) => setImage(image);

  // Function to handle name change
  const handleName = (name) => setName(name);

  // Function to save transaction
  const saveTransaction = async (txHash, amount, fromAddress = currentAccount, toAddress, image, name) => {
    const txDoc = {
      _type: 'transactions',
      _id: txHash,
      fromAddress: fromAddress,
      toAddress: toAddress,
      timestamp: new Date(Date.now()).toISOString(),
      txHash: txHash,
      cImg: image,
      cName: name,
      amount: parseFloat(amount),
    };

    await client.createIfNotExists(txDoc);

    await client
        .patch(currentAccount)
        .setIfMissing({ transactions: [] })
        .insert('after', 'transactions[-1]', [
          {
            _key: txHash,
            _ref: txHash,
            _type: 'reference',
          },
        ])
        .commit();
  };

  // Preloader modal for transaction in progress
  useEffect(() => {
    if (typeof isLoading === 'undefined') return;
    if (isLoading) {
      router.push(`${window.location.href}/?loading=${currentAccount}`);
    } else {
      router.push('/profile');
    }
  }, [isLoading]);

  // Returning TransactionContext.Provider
  return (
      <TransactionContext.Provider
          value={{
            connectWallet,
            currentAccount,
            sendTransaction,
            handleChange,
            handleImage,
            handleName,
            formData,
            NftData,
            isLoading,
          }}
      >
        {children}
      </TransactionContext.Provider>
  );
};








