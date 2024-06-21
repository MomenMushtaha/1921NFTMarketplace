// Importing necessary libraries and components
import Header from '../components/Header'
import CollectionCard from '../components/CollectionCard'
import { sanityClient } from '../sanity'
import Footer from '../components/Footer'

/**
 * Collection component
 *
 * This component is responsible for rendering a page with all collections.
 * It fetches and displays data related to all collections.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.items - The collection items.
 *
 * @returns {JSX.Element} A page with all collections.
 */
export default function Collection({ items }) {
  return (
      <div className="overflow-hidden">
        <h1 className="p-5 py-20 text-center text-4xl font-semibold text-[#FF474C]">
          COLLECTIONS
        </h1>

        <div className="mx-auto max-w-7xl px-8 sm:px-16">
          <div className="pt-2">
            <div className="flex flex-wrap">
              {items.map((item, id) => (
                  <CollectionCard
                      key={id}
                      image={item.image}
                      title={item.title}
                      contractAddress={
                        item.contractAddress ? item.contractAddress : undefined
                      }
                  />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
  )
}

// Fetching data for all collections from Sanity
export async function getServerSideProps() {
  const query = `*[_type == "marketItems"]{
        title,
        "image": profileImage.asset,
        contractAddress,
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