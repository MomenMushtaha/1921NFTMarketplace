// Importing necessary libraries and components
import { BsFillCartFill } from 'react-icons/bs'

// Defining the styles for the components
const style = {
    eventItem: `flex px-4 py-5 font-medium`,
    event: `flex items-center`,
    eventIcon: `mr-2 text-xl`,
    eventName: `text-lg font-semibold`,
    eventPrice: `flex items-center`,
    eventPriceValue: `text-lg`,
    ethLogo: `h-5 mr-2`,
    accent: `text-[#f73455]`,
}

// EventItem component
const EventItem = ({ event }) => {
    // The component returns a div with several child components
    return (
        <div className={style.eventItem}>
            {/* Event details */}
            <div className={`${style.event} flex-[2]`}>
                {/* Event icon */}
                <div className={style.eventIcon}>
                    <BsFillCartFill />
                </div>
                {/* Event name */}
                <div className={style.eventName}>Sale</div>
            </div>
            {/* Event price */}
            <div className={`${style.eventPrice} flex-[2]`}>
                {/* Ethereum logo */}
                <img
                    src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                    alt="eth"
                    className={style.ethLogo}
                />
                {/* Event price value */}
                <div className={style.eventPriceValue}>{event.price}</div>
            </div>
            {/* Event from address */}
            <div className={`${style.accent} flex-[3]`}>{event.from}</div>
            {/* Event to address */}
            <div className={`${style.accent} flex-[3]`}>{event.to}</div>
            {/* Event date */}
            <div className={`${style.accent} flex-[2]`}>{event.date}</div>
        </div>
    )
}

// Exporting the EventItem component
export default EventItem