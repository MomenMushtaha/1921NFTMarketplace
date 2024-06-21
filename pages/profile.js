// Importing necessary libraries and components
import { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import NftCard from '../components/NftCard'
import { TransactionContext } from '../context/TransactionContext'
import { client } from '../lib/sanityClient'
import { sanityClient } from '../sanity'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'
import { BsFillShareFill } from 'react-icons/bs'
import ProfileCard from '../components/ProfileCard'

/**
 * Profile component
 *
 * This component is responsible for rendering the profile page.
 * It fetches and displays data related to the current account and its transaction history.
 *
 * @returns {JSX.Element} The profile page.
 */
export default function Profile() {
  const { isLoading, currentAccount } = useContext(TransactionContext)
  const [transactionHistory, setTransactionHistory] = useState([])
  const [userName, setUserName] = useState()

  // Fetch transaction history when the current account changes
  useEffect(() => {
    ; (async () => {
      if (!isLoading && currentAccount) {
        const query = `
            *[_type=="users" && _id == "${currentAccount}"] {
              "transactionList": transactions[]->{amount, toAddress, cImg, cName, timestamp, txHash}|order(timestamp desc)
            }
          `

        const clientRes = await client.fetch(query)

        setTransactionHistory(clientRes[0].transactionList)
      }
    })()
  }, [isLoading, currentAccount])

  // Set the username when the current account changes
  useEffect(() => {
    if (!currentAccount) return

    const str1 = currentAccount.slice(0, 7)
    const str2 = currentAccount.slice(35)
    const finalStr = str1 + '...' + str2
    setUserName(finalStr)
  }, [currentAccount])

  return (
      <div className="overflow-hidden">
        {/* Banner */}
        <div className="h-[20vh] w-screen overflow-hidden flex justify-center items-center">
          <img
              className="w-full object-cover"
              src="https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="banner"
          />
        </div>

        {/* Profile Info */}
        <div className="w-screen px-4">
          <div className="w-fit md:w-full  flex justify-center text-">
            <img
                className="w-40 h-40 object-cover rounded-full border-2 border-[#FF474C] mt-[-4rem]"
                alt="profile image"
                src="https://www.publicdomainpictures.net/pictures/30000/velka/solid-red-background.jpg"
            />
          </div>

          <div className="w-full flex justify-end text-[#ffcccb]">
            <div className="flex text-3xl mb-[-2rem] invisible md:visible">
              <div className="w-40">
                <div className="flex container justify-between text-[1.4rem] border-2 rounded-lg px-2">
                  <div className="my-2">
                    <BsFillShareFill />
                  </div>

                  <div className="border-r-2"></div>

                  <div className="my-2">
                    <HiDotsVertical />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-fit md:w-full  flex justify-center text-">
            <div className="text-4xl font-semibold mb-4">Unnamed</div>
          </div>

          <div className="w-fit md:w-full  flex justify-center text-">
            <div className="border-red-100 flex items-center rounded-xl border px-8 py-2">
              <img
                  className="h-6 mr-2"
                  src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
              />
              <div className="font-light ">{userName}</div>
            </div>
          </div>
        </div>

        {/* Collected NFTs */}
        <div>
          <h2 className="py-5 pl-20 text-2xl font-semibold text-[#ffcccb] ">
            Collected Nfts
          </h2>
        </div>
        <hr />
        <br />

        <div className="flex flex-wrap">
          {transactionHistory &&
              transactionHistory?.map((transaction, id) => (
                  <ProfileCard key={id} nftItem={transaction} />
              ))}
        </div>
      </div>
  )
}