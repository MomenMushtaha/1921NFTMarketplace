// Importing necessary libraries and components
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import { sanityClient, urlFor } from '../sanity'

// Defining styles for the component
const style = {
  wrapper: `bg-[#8B0000] max-w-sm flex-auto w-[14rem] h-[36rem] my-10 mx-5 overflow-hidden cursor-pointer rounded-sm hover:shadow-2xl hover:scale-105 transition transform duration-100 ease-out`,
  imagecontainer: `h-2/3 w-full overflow-hidden`,
  imgtag: `h-full w-full object-cover`,
  infoconainer: `h-20 bg-[#8B0000] p-4 rounded-b-lg flex items-center text-[#ffcccb] mx-4`,
  infoimage: `h-[3.25rem] rounded-full w-[3.25rem] object-contain`,
  title: `flex flex-col justify-center ml-4 text-[#ffcccb]`,
}

/**
 * HomeCard component
 *
 * This component is responsible for rendering a home card with an image, title, and description.
 * The card is clickable and redirects to the contract page of the collection.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.profileImage - The profile image of the collection.
 * @param {string} props.title - The title of the collection.
 * @param {string} props.collectionItem - The collection item of the collection.
 * @param {string} props.description - The description of the collection.
 * @param {string} props.bannerImage - The banner image of the collection.
 *
 * @returns {JSX.Element} A home card.
 */
const HomeCard = ({
                    profileImage,
                    title,
                    collectionItem,
                    description,
                    bannerImage,
                  }) => {
  return (
      <div
          className={style.wrapper}
          onClick={() => {
            Router.push({
              pathname: `contract/${collectionItem}`,
            })
          }}
      >
        <div className={style.imagecontainer}>
          <img
              src={urlFor(bannerImage).auto('format')}
              className={style.imgtag}
              alt="banner"
          />
        </div>
        <div className={style.imagecontainer}>
          <div className={style.infoconainer}>
            <img
                className={style.infoimage}
                src={urlFor(profileImage)}
                alt="profile"
            />

            <div className={style.title}>{title}</div> // between the curly brackets {title}??
          </div>
          <h4 className="px-3 pb-6 text-sm text-[#ffcccb]">{description}</h4>
        </div>
      </div>
  )
}

// Exporting the HomeCard component
export default HomeCard
