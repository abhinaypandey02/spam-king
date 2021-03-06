module.exports = {
  siteMetadata: {
    siteUrl: "https://abhinaypandey02.github.io/spam-king/",
    title: "spam-king",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Spam King`,
        short_name: `spam`,
        description:"Spam King Official Website",
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        lang:'en',
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
