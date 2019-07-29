module.exports = {
  pathPrefix: "/doc",
  siteMetadata: {
    title: `APIdocs documentation`,
    description: `APIdocs is an opinionated Gatsby template for writing technical documentation. Clone, customize and start documenting.`,
    lang: `en`,
    indexAlias: `/getting-started/`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `@carrotsearch/gatsby-plugin-apidocs`,
      options: {
        navigation: `${__dirname}/src/navigation.json`,
        logo:   `${__dirname}/src/logo.html`,
        footer: `${__dirname}/src/footer.html`,
        basePath: "src/content"
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#ffaa00`,
        showSpinner: false
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-dark-mode`,
    `@carrotsearch/gatsby-transformer-html`,
    '@carrotsearch/gatsby-plugin-content-search',
    `gatsby-plugin-offline`,
    `gatsby-plugin-catch-links`
  ]
};