require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Cedar Bay Trail Co.`,
    description: `Cedar Bay Trail Co.'s website`,
    author: `Borealis Web Development`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_ID,
        dataset: process.env.SANITY_DATASET,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cedar-bay-trail-co`,
        short_name: `CBTC`,
        start_url: `/`,
        background_color: `rgb(18, 47, 111)`,
        theme_color: `rgb(18, 47, 111)`,
        display: `minimal-ui`,
        icon: `src/images/CBTCo_square.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-186298030-1", // Google Analytics / GA
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [{ family: `Bebas Neue` }],
    //   },
    // },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
