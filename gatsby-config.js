/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Manuel Caporaso | Full Stack Developer`,
    description: `Portfolio profesional de Manuel Caporaso, Técnico Superior en Desarrollo de Software especializado en React, Node.js y mantenimiento de sistemas.`,
    twitterUsername: `@tu_usuario`,
    image: `/images/icono.png`, // Ajustado a tu nombre de archivo
    siteUrl: `https://manuelcaporaso.online/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Manuel Caporaso Portfolio`,
        short_name: `Manuel Caporaso`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#491eff`, 
        display: `minimal-ui`,
        // Gatsby busca automáticamente dentro de la raíz del proyecto, 
        // así que 'static/images/icono.png' es correcto si la carpeta está en la raíz.
        icon: `static/images/icono.png`, 
      },
    },
    // Solo dejamos el source de las páginas
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
      __key: `pages`,
    },
    `gatsby-plugin-react-helmet`, 
  ],
}