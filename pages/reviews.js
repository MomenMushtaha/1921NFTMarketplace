import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { sanityClient } from '../sanity';

// Styles for various elements in the Reviews component
const style = {
    wrapper: `overflow-hidden`,
    container: `bg-[#FF474C]`,
    content: `text md:p-auto mx-auto max-w-7xl p-7 text-left text-[#FF474C] md:text-center`,
    title: `p-5 py-20 text-4xl font-semibold sm:px-16`,
    grid: `grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3`,
    card: `bg-white p-4 rounded-lg shadow-lg text-center`,
    image: `w-24 h-24 mx-auto rounded-full`,
    name: `text-2xl font-bold mt-4`,
    stars: `text-yellow-500 mt-2`,
};

// ReviewCard component to display individual review details
const ReviewCard = ({ name, stars, image }) => {
    return (
        <div className={style.card}>
            <img src={image} alt={name} className={style.image} />
            <div className={style.name}>{name}</div>
            <div className={style.stars}>{'★'.repeat(stars)}</div>
        </div>
    );
};

// Reviews component to display all reviews
function Reviews({ items }) {
    return (
        <div className={style.wrapper}>
            <Header />
            <div className={style.container}>
                <div className={style.content}>
                    <h2 className={style.title}>Reviews</h2>
                    <div className={style.grid}>
                        {/* Displaying each review using the ReviewCard component */}
                        {items.map((item, id) => (
                            <ReviewCard
                                key={id}
                                name={item.name}
                                stars={item.stars}
                                image={item.picture}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

// Fetch data for the reviews page from Sanity
export async function getServerSideProps() {
    const query = `*[_type == "reviews" ]{
    name,
    stars,
    picture,
  }`;

    const items = await sanityClient.fetch(query);

    // Return 404 if no items are found
    if (!items) {
        return {
            props: null,
            notFound: true,
        };
    } else {
        // Return the fetched data as props
        return {
            props: {
                items,
            },
        };
    }
}

export default Reviews;
