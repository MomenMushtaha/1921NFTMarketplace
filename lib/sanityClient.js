// Importing the sanityClient from the @sanity/client package
import sanityClient from "@sanity/client";

// Configuring the sanity client
// projectId and dataset are specific to your Sanity.io project
// apiVersion is set to the current date in the format 'YYYY-MM-DD'
// token is the write token for this dataset. It must start with 'sk' and be prefixed with 'Bearer'
// useCdn is set to false to ensure fresh data is always fetched from the server
export const client = sanityClient({
    projectId: 'nm1pp7pw',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skhfV0K4zdOkbzQJqoHM6yrj7L6WLsBm4PudItsS5eAlPfeZAYbVYGClJAq85PJc8igowqCZiCHBsLQoyg6m8kqira4cSjjVAYzizuVJGBMRfKlsZNFW0KwknfVixU1kOmdZWsVLUhT2kPqW5amAhloC1b948FBFgVyXzELAVbyVxdc0KCV3',
    useCdn: false,
});