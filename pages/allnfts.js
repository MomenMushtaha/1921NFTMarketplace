// Importing necessary libraries and components
import Header from "../components/Header"
import { sanityClient } from "../sanity"
import NftCard from "../components/NftCard"
import Footer from "../components/Footer"

/**
 * AllNfts component
 *
 * This component is responsible for rendering a page with all NFTs.
 * It fetches and displays data related to all NFTs.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.items - The NFT items.
 *
 * @returns {JSX.Element} A page with all NFTs.
 */
export default function AllNfts({ items }) {
    return (
        <div className="overflow-hidden">
            <h1 className="text-4xl text-[#FF474C] text-center font-semibold p-5 py-20">ALL NFTs</h1>

            <div className="max-w-7xl mx-auto px-8 sm:px-16">
                <div className="pt-2">
                    <div className="flex flex-wrap">
                        {items.map((item, id) => (
                            <NftCard
                                key={id}
                                nftItem={item}
                                listing="true"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

// Fetching data for all NFTs from Sanity
export async function getServerSideProps() {
    const query = `*[_type == "testImage"]`
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