import { urlFor } from '../sanity'
import Image from 'next/image'
import Router from 'next/router'

const style = {
  imgClass: `relative h-[3.25rem] rounded-lg w-[3.25rem] object-contain`,
}

const SmallCard = ({ name, noOfNfts, image, volumeTraded, index, collectionItem }) => {
  return (
    <div className="flex items-center justify-between m-2 mt-5 p-2 bg-[#8B0000] border-solid border-2 border-[#f73455] space-x-10 rounded-xl cursor-pointer hover:scale-105 transition transform duration-200 ease-out "
    onClick={() => {
      Router.push({
        pathname: `contract/${collectionItem}`,
      })
    }}
  >
      {/* LEFT */}
      <div className='flex items-center space-x-3'>
        <div className='text-[#f73455]'>
          {index + 1}.
        </div>
        <img
          className={style.imgClass}
          src={urlFor(image).auto('format')}
          alt=""
        />

        <div>

        <h2>{name}</h2>

        <h4 className='text-[#f73455]'>{volumeTraded}</h4>
        </div>
      </div>

      {/* RIGHT */}
      <div className='order-last'>

        <div className=''>
          <h4 className='text-[#f73455]'>{noOfNfts.length}</h4>
        </div>

      </div>
    </div>
  )
}

export default SmallCard
