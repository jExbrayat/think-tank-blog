interface SiteConfig {
	site: string
	base: string
	author: string
	title: string
	subTitle: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://jexbrayat.github.io/think-tank-blog/', // Write here your website url
	base: '/think-tank-blog/',
	author: 'Jules Exbrayat', // Site author
	title: "IA de l'Espoir", // Site title.
	subTitle: 'French Think-Tank, World Wide',
	description: 'French Think-Tank, World Wide', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Impact our community by sharing this site', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
