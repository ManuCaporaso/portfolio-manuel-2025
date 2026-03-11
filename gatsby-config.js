/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    // 1. Eliminamos trailingSlash: 'never' para evitar el error de validación
    siteMetadata: {
        title: 'Manuel Caporaso',
        description: 'Full Stack Developer portfolio.',
        author: '@ManuCaporaso',
        siteUrl: 'https://manuelcaporaso.online',
    },
    plugins: [
        'gatsby-plugin-postcss', 
        'gatsby-plugin-react-helmet' // Solo deja este, el otro 'react-helmet' no va en plugins
    ],
};