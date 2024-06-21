// Importing necessary libraries and components
import { CgArrowsExchangeV } from 'react-icons/cg'
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai'
import { useState } from 'react'
import EventItem from './itemActivity/EventItem'
import { dummyEvents } from '../../static/dummyEvents'

// Defining the styles for the components
const style = {
  wrapper: `w-full mt-8 border border-[#8B0000] rounded-xl bg-[#A80000] overflow-hidden `,
  title: `bg-[#A80000] px-6 py-4 flex items-center`,
  titleLeft: `flex-1 flex items-center text-xl font-bold`,
  titleIcon: `text-3xl mr-2`,
  titleRight: `text-xl`,
  filter: `flex items-center border border-[#8B0000] mx-4 my-6 px-3 py-4 rounded-xl bg-[#A80000]`,
  filterTitle: `flex-1`,
  tableHeader: `flex w-full bg-[#A80000] border-y border-[#8B0000] mt-8 px-4 py-1`,
  eventItem: `flex px-4`,
  ethLogo: `h-5 mr-2`,
  accent: `text-[#f73455]`,
}

// ItemActivity component
const ItemActivity = () => {
  // Using useState hook for toggle state
  const [toggle, setToggle] = useState(true)

  // The component returns a div with several child components
  return (
      <div className={style.wrapper}>
        {/* Title Section */}
        <div className={style.title} onClick={() => setToggle(!toggle)}>
          <div className={style.titleLeft}>
          <span className={style.titleIcon}>
            <CgArrowsExchangeV />
          </span>
            Item Activity
          </div>
          <div className={style.titleRight}>
            {toggle ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
        </div>

        {/* Toggle Section */}
        {toggle && (
            <div className={style.activityTable}>
              {/* Filter Section */}
              <div className={style.filter}>
                <div className={style.filterTitle}>Filter</div>
                <div className={style.filterIcon}>
                  {' '}
                  <AiOutlineDown />{' '}
                </div>
              </div>

              {/* Table Header Section */}
              <div className={style.tableHeader}>
                <div className={`${style.tableHeaderElement} flex-[2]`}>Event</div>
                <div className={`${style.tableHeaderElement} flex-[2]`}>Price</div>
                <div className={`${style.tableHeaderElement} flex-[3]`}>From</div>
                <div className={`${style.tableHeaderElement} flex-[3]`}>To</div>
                <div className={`${style.tableHeaderElement} flex-[2]`}>Date</div>
              </div>

              {/* Event Items Section */}
              {dummyEvents.map((event, id) => (
                  <EventItem key={id} event={event}/>
              ))}
            </div>
        )}
      </div>
  )
}

// Exporting the ItemActivity component
export default ItemActivity