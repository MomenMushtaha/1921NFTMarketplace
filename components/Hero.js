// Importing necessary libraries and components
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileIcon from '../assets/dk.png'

// Defining styles for the component
const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://w0.peakpx.com/wallpaper/505/754/HD-wallpaper-one-piece-gear-5-one-piece-monkey-d-luffy.jpg')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-full md:h-screen  relative justify-start  md:justify-center items-center`,
  copyContainer: `md:w-1/2 pt-9 md:pt-auto pl-12 md:pl-auto p-[20px] md:p-[20px]  text-left `,
  title: `relative text-[#ffcccb] text-[46px] font-semibold`,
  description: `text-[#ffcccb] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#8B0000] rounded-lg mr-5 text-[#ffcccb] hover:bg-[#8B0000] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#8B0000] rounded-lg mr-5 text-[#ffcccb] hover:bg-[#ffcccb] cursor-pointer`,
  cardContainer: `rounded-[3rem] invisible md:visible`,
  infoContainer: `h-20 bg-[8B0000#] p-4 rounded-b-lg flex items-center text-[#ffcccb]`,
  profileimg: `h-[2.25rem] rounded-full`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#ffcccb] text-3xl font-bold`,
}

/**
 * Hero component
 *
 * This component is responsible for rendering the hero section of the application.
 * The hero section contains a title, a description, and a call to action button.
 *
 * @returns {JSX.Element} The hero section of the application.
 */
const Hero = () => {
  return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.contentWrapper}>

            <div className={style.copyContainer}>   // component 1 inside the content wrapper: copy container

              <div className={style.title}>
                Discover, collect, and sell extraordinary NFTs
              </div>

              <div className={style.description}>
                1921NFTMarketplace is the world&apos;s largest and most reliable NFT marketplace
              </div>

              <div className={style.ctaContainer}>
                <Link href="/collections">
                  <button className={style.accentedButton}>Explore</button>
                </Link>
              </div>

            </div>

            <div className={style.cardContainer}> // component 2 inside the content wrapper: card container

              <div className={style.infoContainer}>
                <img
                    className={style.profileimg} // to be changed
                    src="https://lh3.googleusercontent.com/pqR3PEN7lUuAwTZpk_sjbKKGQVbj4jIj_OFGDmNW1wGKPgygR6tpM0sAcbuMjis84ddfeokjzWjAMNQYw0VpNyIkx6OwjQFifxLHlw=s80"
                    alt="profile picture"
                />

                <div className={style.author}>

                  <div className={style.name}> Mush Labs </div>
                  <a className="text-[#ffcccb]" name="Mo'men"> Mo'men </a>

                </div>

              </div>
            </div>

          </div>
        </div>

        // why 3 breaks?
        <br />
        <br />
        <br />
      </div>
  )
}

// Exporting the Hero component
export default Hero
