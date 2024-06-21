// Importing necessary libraries and components
import Header from '../components/Header'
import { sanityClient } from '../sanity'
import AdminTable from '../components/AdminTable'

/**
 * Admin component
 *
 * This component is responsible for rendering an admin page.
 * It fetches and displays data related to all users.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.items - The users.
 *
 * @returns {JSX.Element} An admin page.
 */
export default function Admin({ items }) {
  return (
      <div>
        <h1 className="p-5 py-20 text-center text-4xl font-semibold text-[#FF474C]">
          ADMIN
        </h1>

        <div className="mx-auto max-w-7xl px-8 sm:px-16">
          <table className="bg-red-600 table-auto text-[#ffcccb]">
            <thead className="text-5xl">
            <tr>
              <th>S/N &nbsp; </th>
              <th>Wallet Address</th>
            </tr>
            </thead>
            <br />
            <tbody className="text-2xl ">
            {items.map((item, id) => (
                <AdminTable
                    index={items.indexOf(item)}
                    address={item.walletAddress ? item.walletAddress : 'null'}
                />
            ))}
            </tbody>
          </table>
        </div>
      </div>
  )
}

// Fetching data for all users from Sanity
export async function getServerSideProps() {
  const query = `*[_type == "users"]{
        walletAddress,
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