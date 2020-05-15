module.exports = {
  siteMetadata: {
    title: `React95`,
    description: `A component library based on Windows 95. Made with React and styled-components`,
    author: '@React95',
  },
  plugins: [
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
        name: `React95/explorer`,
        short_name: `Explorer`,
        start_url: `/`,
        background_color: `#000e7a`,
        theme_color: `#000e7a`,
        display: `minimal-ui`,
        icon: `src/images/react95.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-mdx`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
