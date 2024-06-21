// Importing necessary libraries and components
import { IoMdSnow } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'
import { urlFor } from '../../sanity'

// Defining the styles for the components
const style = {
    topBar: `bg-[#330000] p-2 rounded-t-lg border-[#8B0000] border`,
    topBarContent: `flex items-center`,
    likesCounter: `flex-1 flex items-center justify-end`,
}

// NFTImage component
const NFTImage = ({ selectedNft, alt }) => {
    // The component returns a div with several child components
    return (
        <div>
            {/* Top Bar Section */}
            <div className={style.topBar}>
                <div className={style.topBarContent}>
                    {/* Snow Icon */}
                    <IoMdSnow />
                    {/* Likes Counter */}
                    <div className={style.likesCounter}>
                        <AiOutlineHeart />
                        2.3K
                    </div>
                </div>
            </div>
            {/* Image Section */}
            <div>
                <img src={urlFor(selectedNft)} alt={alt} className="h-full md:h-[44vh] object-contain"/>
            </div>
        </div>
    )
}

// Exporting the NFTImage component
export default NFTImage