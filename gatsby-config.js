require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `ARMS`,
    description: `Autonomous Robotic Monitoring Systems`,
    author: `Jonathan Ng`,
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-177516248-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product`,
        path: `${__dirname}/src/images/product`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `profiles`,
        path: `${__dirname}/src/images/profiles`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#303030`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/arms-icon-1.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/icons\/.*\.svg/ // See below to configure properly
        }
      }
    }
  ],
}
