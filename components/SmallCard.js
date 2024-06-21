// Importing necessary libraries and components
import { urlFor } from '../sanity'
import Router from 'next/router'

// Defining styles for the component
const style = {
    imgClass: `relative h-[3.25rem] rounded-lg w-[3.25rem] object-contain`,
}

/**
 * SmallCard component
 *
 * This component is responsible for rendering a small card with an image, name, volume traded, and number of NFTs.
 * The card is clickable and redirects to the contract page of the collection.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name of the collection.
 * @param {Array} props.noOfNfts - The number of NFTs in the collection.
 * @param {string} props.image - The image of the collection.
 * @param {number} props.volumeTraded - The volume traded of the collection.
 * @param {number} props.index - The index of the collection.
 * @param {string} props.collectionItem - The collection item of the collection.
 *
 * @returns {JSX.Element} A small card.
 */
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

// Exporting the SmallCard component
export default SmallCard