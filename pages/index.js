import { sanityClient } from '../sanity'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import Footer from '../components/Footer'
import SmallCard from '../components/SmallCard'

const style = {
  wrapper: `overflow-hidden`,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#FF474C] `,
  button: `border border-[#FF474C] bg-[#FF474C] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-['#8B0000']`,
  details: `text-lg text-center text=[#FF474C] font-semibold mt-4`,
  cardgrid: `w-1/3 px-2`,
  sectionContainer: `max-w-7xl mx-auto px-8 sm:px-16 pt-6`,
}

/**
 * Home component
 *
 * This component is responsible for rendering the home page.
 * It fetches and displays data related to all items.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.items - The items.
 *
 * @returns {JSX.Element} The home page.
 */
export default function Home({ items }) {

  return (
    <div className={style.wrapper}>
      {/* {address ? (   //Conditional Rendering */}
      <>
        <div className="section1">
          <Hero />
          <br />
        </div>

        {/* FEATURED COLLECTION SECTION */}
        <div className="section2">
          <section className={style.sectionContainer}>
            <h2 className="pb-5 text-4xl font-semibold text-[#FF474C]">
              Featured Collections
            </h2>

            <div className="flex flex-wrap">
              {/* {items?.map((item, id) => (
                  <HomeCard
                    key={id}
                    bannerImage={item.bannerUrl}
                    collectionItem={item.contractAddress}
                    title={item.title}
                    description={item.description}
                    profileImage={item.imageUrl}
                  />
                ))} */}

              <HomeCard
                bannerImage={items[0].bannerUrl}
                collectionItem={items[0].contractAddress}
                title={items[0].title}
                description={items[0].description}
                profileImage={items[0].imageUrl}
              />

              <HomeCard
                bannerImage={items[3].bannerUrl}
                collectionItem={items[3].contractAddress}
                title={items[3].title}
                description={items[3].description}
                profileImage={items[3].imageUrl}
              />

              <HomeCard
                bannerImage={items[2].bannerUrl}
                collectionItem={items[2].contractAddress}
                title={items[2].title}
                description={items[2].description}
                profileImage={items[2].imageUrl}
              />

              <br />
              <br />
              <br />
              // why 3 containers?
            </div>
          </section>
        </div>

        {/* TOP COLLECTION SECTION */}
        <div className="section3">
          <section className={style.sectionContainer} id="section3">
            <h2 className="p-5 py-20 text-4xl font-semibold text-[#FF474C]">
              Top Collections
            </h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {items?.map((item, id) => (
                <SmallCard
                  key={id}
                  index={items.indexOf(item)}
                  name={item.title}
                  image={item.imageUrl}
                  noOfNfts={item.images}
                  volumeTraded={item.volumeTraded}
                  collectionItem={item.contractAddress}
                />
              ))}
            </div>

            # 7 breaks!
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </section>
        </div>

        <Footer />
      </> //?
    </div>
  )
}

export async function getServerSideProps() {
  const query = `*[ _type == "marketItems" ]{
    "imageUrl" : profileImage.asset,
    "bannerUrl" : bannerImage.asset,
    title,
    description,
    contractAddress,
    volumeTraded,
    images,
  }`

  const items = await sanityClient.fetch(query)

  if (!items) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        items: items,
      },
    }
  }
}
