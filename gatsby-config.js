
require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Adam Hałdaś web development`,
    siteTitleAlt: `Adam Hałdaś web development`,
    siteHeadline: `Adam Hałdaś - portfolio`,
    siteUrl: `https://ahwebdev.netlify.com/`,
    siteDescription: `Adam Hałdaś one page portfolio`,
    siteLanguage: `pl`,
    siteImage: `/banner1.jpg`,
    siteTitleAlt: `AH webdev`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adam Hałdaś portfolio`,
        short_name: `AHwebdev`,
        description: `Adam Hałdaś - portfolio`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/www.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/www.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}

