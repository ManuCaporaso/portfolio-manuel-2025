/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	trailingSlash: 'never',
	siteMetadata: {
		title: 'Manuel Caporaso',
		description: 'Full Stack Developer portfolio.',
		author: '@ManuCaporaso',
		siteUrl: 'https://manuelcaporaso.online',
	},
	plugins: ['gatsby-plugin-postcss', `gatsby-plugin-react-helmet`, `react-helmet`],
};
