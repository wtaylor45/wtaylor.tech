module.exports = {
  siteMetadata: {
    title: `Will Taylor`,
    description: `A brief introduction to me, Will Taylor.`,
    author: `@wtaylor45`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
      }
    },
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`
  ]
};
