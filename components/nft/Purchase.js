// Importing necessary libraries and components
import { useEffect, useState } from 'react'
import { HiTag } from 'react-icons/hi'
import { IoMdWallet } from 'react-icons/io'
import toast, { Toaster } from 'react-hot-toast'

// Defining the styles for the components
const style = {
  button: `mr-8 flex items-center py-2 px-12 rounded-lg cursor-pointer`,
  buttonIcon: `text-xl`,
  buttonText: `ml-2 text-lg font-semibold`,
}

// MakeOffer component
const MakeOffer = ({ isListed, selectedNft, listings, buyItem }) => {
  // Using useState hook for selectedMarketNft and enableButton states
  const [selectedMarketNft, setSelectedMarketNft] = useState()
  const [enableButton, setEnableButton] = useState(false)

  // useEffect hook to enable the button when selectedNft is available
  useEffect(() => {
    if (!selectedNft) return
    setEnableButton(true)
  }, [selectedNft])

  // Function to show a toast notification when purchase is successful
  const confirmPurchase = (toastHandler = toast) =>
      toastHandler.success(`Purchase successful!`, {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      })

  // The component returns a div with several child components
  return (
      <div className="flex h-20 w-full items-center rounded-lg md:border border-[#8B0000] bg-none md:bg-[#8B0000] px-0 md:px-12">
        <Toaster position="top-center" reverseOrder={false} />
        {isListed === 'true' ? (
            // Buy Now Button
            <div
                onClick={enableButton ? buyItem : null}
                className={`${style.button} bg-[#f73455] hover:bg-[#ffcccb]`}
            >
              <IoMdWallet className={style.buttonIcon} />
              <div className={style.buttonText}>Buy Now</div>
            </div>
        ) : (
            // List Item Button
            <div className={`${style.button} bg-[#f73455] hover:bg-[#ffcccb]`}>
              <IoMdWallet className={style.buttonIcon} />
              <div className={style.buttonText}>List Item</div>
            </div>
        )}
      </div>
  )
}

// Exporting the MakeOffer component
export default MakeOffer