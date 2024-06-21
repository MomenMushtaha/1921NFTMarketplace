// Importing the necessary functions from the 'next-sanity' package
import { createClient, createImageUrlBuilder } from 'next-sanity'

// Defining the configuration for the Sanity client
const config = {
  // The dataset to use
  dataset: 'production',

  // The project ID
  projectId: 'nm1pp7pw',

  // Whether to use the CDN or not
  useCdn: false,
}

/**
 * Function to format the .jpg from sanity.io into a source attribute in an image tag.
 * @param {object} source - The source object
 * @returns {string} - The URL for the image
 */
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Creating and exporting the Sanity client with the defined configuration
export const sanityClient = createClient(config)