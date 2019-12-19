module.exports = {
  siteMetadata: {
    title: "Full-Stack Bootcamp",
    author: "Andrew Mead",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
