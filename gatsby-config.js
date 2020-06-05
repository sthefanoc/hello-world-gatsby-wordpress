/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "New Try with Helmet",
    description:"This is an awesome description. And we're going to see more!",
    keywords:"gatsby, great, eay, awesome",
    image:"/static/gatsby.jpg",
    url:'https://www.gatsbyjs.org/'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `ofertopbrasil.com.br`,
        protocol: `http`,
        hostingWPCOM: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby bootstrap wordpress`,
        short_name: `GatsWordpress`,
        start_url: `/`,
        background_color: `#f8f9fa`,
        theme_color: `#ffffff`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`
  ]
}

{/* <Helmet>
  <title>Fun Gatsby Wordpress</title>
  <meta name="description" content="!" />
  <meta name="keywords" content="gatsby, awesome, eay" />
  <meta name="robots" content="index,follow" />
</Helmet> */}