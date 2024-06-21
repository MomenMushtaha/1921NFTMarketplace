import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import appLogo from '../assets/opensea.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { TransactionContext } from '../context/TransactionContext'
import toast, { Toaster } from 'react-hot-toast' // Receiving toast
import { HiMenu } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'

const style = {
  wrapper: `flex items-center justify-between bg-[#8B0000] w-screen px-[1.2rem] py-[0.8rem]`,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-[#ffcccb] font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center md:bg-[#f73455] rounded-[0.8rem] hover:bg-[#f73455]`,
  searchIcon: `text-[#8B0000] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#ffcccb] placeholder:text-[#ffcccb]`,
  headerItems: ` md:flex md:items-center justify-end bg-[#ffcccb] md:bg-inherit z-[1] md:z-auto md:static absolute left-0 h-1/3 w-full md:w-auto rounded-xl md:opacity-100 opacity-0`,
  MenuItems: ` md:flex md:items-center justify-end bg-inherit md:bg-inherit z-[1] md:z-auto md:static absolute left-0  w-full md:w-auto rounded-xl md:opacity-100 opacity-100 mt-3`,
  headerItem: `text-[#ffcccb] px-4 font-bold md:text-[#ffcccb] hover:text-[#ffcccb] duration-500 cursor-pointer py-2`,
  headerIcon: `text-[#8B0000] text-3xl font-black px-4 hover:text-[#ffcccb] duration-500 cursor-pointer`,
  addressProfile: `flex items-center space-x-2 pt-0 md:pt-0`,
  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center md:bg-[#8B0000] bg-none rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonAccent: `bg-[#f73455] border border-[#8B0000] hover:border-[#8B0000] h-full rounded-2xl flex items-center justify-center text-[#ffcccb]`,
  menuButton: ``,
}

const Header = () => {
  const { ab, currentAccount } = useContext(TransactionContext)
  const [userName, setUserName] = useState()
  const [checkMenu, setcheckMenu] = useState(true)

  const value = useContext(TransactionContext)
  const connectWallet = Object.values(value)[0]

  useEffect(() => {
    if (!currentAccount) return

    const str1 = currentAccount.slice(0, 4)
    const str2 = currentAccount.slice(38)
    const finalStr = str1 + '...' + str2
    setUserName(finalStr)
  }, [currentAccount])

  return (
      <div className={style.wrapper}>
        <div className="flex items-center">
          <Link href="/">
          <span className={style.logoContainer}>
            <Image src={appLogo} height={40} width={40} />
            <div className={style.logoText}>1921Marketplace</div>
          </span>
          </Link>

          <div className={style.searchBar}>
            <div className={style.searchIcon}>
              <AiOutlineSearch />
            </div>

            <input
                className={style.searchInput}
                placeholder="Search items, collections and accounts"
            />
          </div>
        </div>

        <Toaster position="top-center" reverseOrder={false} />

        {!currentAccount ? (
            <div className={`${checkMenu ? style.headerItems : style.MenuItems}`}>
              <Link href="/">
                <div className={style.headerItem}> Home </div>
              </Link>

              <Link href="/collections">
                <div className={style.headerItem}> Collections </div>
              </Link>

              <Link href="/allnfts">
                <div className={style.headerItem}> NFTs </div>
              </Link>
            </div>
        ) : (
            ''
        )}

        {currentAccount ? (

            <div className={`${checkMenu ? style.headerItems : style.MenuItems}`}>
              <Link href="/">
                <div className={style.headerItem}> Home </div>
              </Link>

              <Link href="/collections">
                <div className={style.headerItem}> Collections </div>
              </Link>

              <Link href="/allnfts">
                <div className={style.headerItem}> NFTs </div>
              </Link>

              {checkMenu ? (
                  <div className={`${style.headerIcon} ${style.addressProfile} `}>
                    <Link href="/profile">
                      <div className="flex items-center">
                        <CgProfile />
                        <div className={`${style.button} ${style.buttonPadding}`}>
                          <div className={style.buttonTextContainer}>{userName}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
              ) : (
                  ''
              )}
            </div>
        ) : (
            <div
                onClick={() => connectWallet()}
                className={`${style.button} ${style.buttonPadding}`}
            >
              <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
                Connect Wallet
              </div>
            </div>
        )}
      </div>
  )
}

export default Header