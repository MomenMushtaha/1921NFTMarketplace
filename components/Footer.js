import Image from 'next/image'
import Link from 'next/link'
import appLogo from '../assets/opensea.png'

const style = {
  mainContainer: ` grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 px-[40px] md:px-[45px] lg:px-[55px] xl:px-32 py-14 text-red-100 space-x-4`,
  mainDiv: `space-y-4 text-red-100 text-xs`,
  h5Element: `font-bold text-lg `,
  ptag: `text-base text-left`,
}

function Footer() {
  return (
    <div>
      <div className={style.mainContainer}>
        <div className={style.mainDiv}>
          <Link href="/">
            <div className="flex cursor-pointer items-center space-x-4">
              <Image src={appLogo} height={40} width={40} />

              <div className=" text-2xl font-bold">
                <span className="hover:scale-102 transform pr-4 transition duration-200 ease-out hover:text-red-100 ">
                  1921Marketplace
                </span>
              </div>
            </div>
            {/* <h1 className='text-xl font-bold cursor-pointer'>1921Marketplace</h1> */}
          </Link>

          <p className={style.ptag}>
            1921Marketplace is the largest and most active NFT marketplace on the
            Ethereum blockchain. Through 1921Marketplace, anybody can easily and
            quickly, mint, and buy NFTs at a fraction of the cost of other NFT
            platforms. 1921Marketplace also provides feeless NFT transfers.
          </p>
        </div>
        <div className={style.mainDiv}>
          <h5 className={style.h5Element}>GENERAL</h5>
          <Link href="/collections">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-red-100 hover:underline ">
              Explore
            </div>
          </Link>

          <Link href="/collections">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-red-100 hover:underline ">
              All Collections
            </div>
          </Link>

          <Link href="/allnfts">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-red-100 hover:underline ">
              All NFTs
            </div>
          </Link>
          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-red-100 hover:underline ">
              Stats
            </div>
          </Link>
        </div>

        <div className={style.mainDiv}>
          <h5 className={style.h5Element}>HOST</h5>
          <Link href="/collections">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-red-100 hover:underline ">
              Explore
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-red-100 hover:underline ">
              Auctions
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-red-100 hover:underline ">
              Offers
            </div>
          </Link>
          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-red-100 hover:underline ">
              Stats
            </div>
          </Link>
        </div>

        <div className={style.mainDiv}>
          <h5 className={style.h5Element}>ECOSYSTEM</h5>
          <Link href="/collections">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-red-100 hover:underline ">
              Buy Mint Token
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-red-100 hover:underline ">
              Trade Mint
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-red-100 hover:underline ">
              Mint RIch List
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-red-100 hover:underline">
              Mint Telegram
            </div>
          </Link>
        </div>
      </div>

      <div className={style.mainContainer}>
        <div className="text-red-100">
          <div>
            © Copyright 2024 &nbsp;
            <Link href="/">
              <span className="cursor-pointer hover:text-red-100 hover:underline">
                1921Marketplace
              </span>
            </Link>
            &nbsp; -All Rights Reserved
          </div>
        </div>

        {/* <div className='flexorde  r-last'>Social Media Handles</div> */}
      </div>
    </div>
  )
}

export default Footer
