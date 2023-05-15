module.exports = {
  siteMetadata: {
    title: `react-week10`,
    author: `Diana Umaña`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data/',
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    'gatsby-transformer-json',
  ],
};
