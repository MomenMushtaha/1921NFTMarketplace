// Importing necessary libraries and components
import { css } from '@emotion/react'
import { MoonLoader } from 'react-spinners'

// Defining styles for the component
const style = {
    wrapper: `text-[#ffcccb] h-96 w-72 flex flex-col justify-center items-center`,
    title: `font-semibold text-xl mb-12`,
}

// Overriding the CSS for the MoonLoader component
const cssOverride = css`
  display: block;
  margin: 0 auto;
  border-color: #ffcccb;
`

/**
 * TransactionLoader component
 *
 * This component is responsible for rendering a loading spinner and a title.
 * It is used to indicate that a transaction is in progress.
 *
 * @returns {JSX.Element} A loading spinner with a title.
 */
const TransactionLoader = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>Transaction in progress...</div>
            <MoonLoader color={'#ffcccb'} loading={true} css={cssOverride} size={50} />
        </div>
    )
}

// Exporting the TransactionLoader component
export default TransactionLoader