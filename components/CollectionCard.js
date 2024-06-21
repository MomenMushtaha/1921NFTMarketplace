// Importing necessary libraries and components
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import { sanityClient, urlFor } from '../sanity'

// Defining styles for the component
const style = {
  wrapper: `bg-[#8B0000] max-w-sm flex-auto w-[14rem] h-[30rem] my-10 mx-5 overflow-hidden cursor-pointer rounded-xl hover:border-solid hover:shadow-2xl hover:scale-105 transition transform duration-100 ease-out border-dashed border-2 border-[#8B0000] `,
  imagecontainer: `h-2/3 w-full overflow-hidden`,
  imgtag: `h-full w-full`,
  infoconainer: `h-20 bg-[#8B0000] p-4 rounded-b-lg flex items-center text-[#f73455] mx-4`,
  title: `flex flex-col justify-center ml-4 text-[#ffcccb]`,
}

/**
 * CollectionCard component
 *
 * This component is responsible for rendering a collection card with an image and a title.
 * The card is clickable and redirects to the contract page of the collection.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the collection.
 * @param {string} props.image - The image of the collection.
 * @param {string} props.contractAddress - The contract address of the collection.
 *
 * @returns {JSX.Element} A collection card.
 */
const CollectionCard = ({ title, image, contractAddress }) => {
  return (
      <div
          className={style.wrapper}
          onClick={() => {
            Router.push({
              pathname: `contract/${contractAddress}`,
            })
          }}
      >
        <div className={style.imagecontainer}>
          <img
              className={style.imgtag}
              src={urlFor(image).auto('format')}
              alt={image}
          />
        </div>
        <div className={style.imagecontainer}>
          <div className="py-8 text-center text-2xl text-[#ffcccb]">{title}</div>
        </div>
      </div>
  )
}

// Exporting the CollectionCard component
export default CollectionCard