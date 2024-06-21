// Importing necessary libraries and components
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { MdRefresh } from 'react-icons/md'
import { RiShareBoxLine } from 'react-icons/ri'
import { FiMoreVertical } from 'react-icons/fi'
import { GiShare } from 'react-icons/gi'

// Importing the TransactionContext
import { TransactionContext } from '../../context/TransactionContext'

// Defining the styles for the components
const style = {
  wrapper: `flex`,
  infoContainer: `h-36 flex flex-col flex-1 justify-between mb-6 w-screen md:w-0`,
  accent: `text-[#f73455]`,
  nftTitle: `text-3xl font-extrabold`,
  otherInfo: `flex`,
  ownedBy: `text-[#7F6464] mr-4`,
  likes: `flex items-center text-[#7F6464]`,
  likeIcon: `mr-1`,
  actionButtonsContainer: `w-44 invisible md:visible`,
  actionButtons: `flex container justify-between text-[1.4rem] border-2 rounded-lg`,
  actionButton: `my-2`,
  divider: `border-r-2`,
}

// GeneralDetails component
const GeneralDetails = ({ selectedNft }) => {
  // The component returns a div with several child components
  return (
      <div className={style.wrapper}>
        {/* Information Container */}
        <div className={style.infoContainer}>
          {/* NFT Status */}
          <div className={style.accent}>Listed NFT</div>
          {/* NFT Title */}
          <div className={style.nftTitle}>#&nbsp;{selectedNft.caption}</div>
          {/* Other Information */}
          <div className={style.otherInfo}>
            {/* Owner Information */}
            <div className={style.ownedBy}>
              Owned by <span className={style.accent}>e88vault</span>
            </div>
            {/* Likes Information */}
            <div className={style.likes}>
              <AiFillHeart className={style.likeIcon} /> 2.3K favorites
            </div>
          </div>
        </div>
        {/* Action Buttons Container */}
        <div className={style.actionButtonsContainer}>
          <div className={style.actionButtons}>
            {/* Refresh Button */}
            <div className={`${style.actionButton} ml-2`}>
              <MdRefresh />
            </div>
            <div className={style.divider} />
            {/* Share Box Button */}
            <div className={style.actionButton}>
              <RiShareBoxLine />
            </div>
            <div className={style.divider} />
            {/* Share Button */}
            <div className={style.actionButton}>
              <GiShare />
            </div>
            <div className={style.divider} />
            {/* More Options Button */}
            <div className={`${style.actionButton} mr-2`}>
              <FiMoreVertical />
            </div>
          </div>
        </div>
      </div>
  )
}

// Exporting the GeneralDetails component
export default GeneralDetails