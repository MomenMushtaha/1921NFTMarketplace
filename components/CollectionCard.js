import Link from 'next/link'
import Router from 'next/router'
import React, { cloneElement, useState } from 'react'
import { MdLocalPrintshop } from 'react-icons/md'
import { sanityClient, urlFor } from '../sanity'
// import { urlFor } from '../sanity';
import { Route } from 'react-router-dom'

const style = {
  wrapper: `bg-[#8B0000] max-w-sm flex-auto w-[14rem] h-[30rem] my-10 mx-5 overflow-hidden cursor-pointer rounded-xl hover:border-solid hover:shadow-2xl hover:scale-105 transition transform duration-100 ease-out border-dashed border-2 border-[#8B0000] `,
  imagecontainer: `h-2/3 w-full overflow-hidden`,
  imgtag: `h-full w-full`,
  infoconainer: `h-20 bg-[#8B0000] p-4 rounded-b-lg flex items-center text-[#f73455] mx-4`,

  title: `flex flex-col justify-center ml-4 text-[#ffcccb]`,
}

const CollectionCard = ({ title, image, contractAddress }) => {
  // console.log(contractAddress)

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

export default CollectionCard
