const projectPackage = require("./package.json");

module.exports = {
  siteMetadata: {
    title: `APIdocs starter project`,
    description: `APIdocs is an opinionated Gatsby template for writing technical documentation. Clone, customize and start documenting.`,
    lang: `en`,
    indexAlias: `/hello/`
  },
  plugins: [
    {
      resolve: `@carrotsearch/gatsby-theme-apidocs`,
      options: {
        navigation: `${__dirname}/src/navigation.json`,
        logo: `${__dirname}/src/logo.html`,
        footer: `${__dirname}/src/footer.html`,
        basePath: "src/content",
        variables: {
          "APIDOCS_STARTER_VERSION": projectPackage.version,
          "BUILD_TYPE": "public"
        }
      }
    }
  ]
}
