import { gql } from 'graphql-request'
import { CONTENTFUL_ADDITIONAL_PAGE_FRAGMENTS } from './index'
import CONTENTFUL_NAVIGATION_MENU_FRAGMENT from './contentfulNavigationMenu'
import CONTENTFUL_NAVIGATION_LINK_FRAGMENT from './contentfulNavigationLink'

const ContentfulSiteSettings = gql`
	${CONTENTFUL_ADDITIONAL_PAGE_FRAGMENTS}
	${CONTENTFUL_NAVIGATION_MENU_FRAGMENT}
	${CONTENTFUL_NAVIGATION_LINK_FRAGMENT}
	fragment ContentfulSiteSettings on SiteSettings {
		sys {
			id
		}
		title
		favicon {
			__typename
			url
			height
			width
			contentType
			fileName
		}
		touchIcon {
			__typename
			url
			height
			width
			contentType
			fileName
		}
		defaultSeo {
			...ContentfulSeo
		}
		headerNavigationCollection(limit: 10) {
			items {
				...ContentfulNavigationLink
			}
		}
		headerNavigationSocialLinksCollection(limit: 10) {
			items {
				...ContentfulLink
			}
		}

		headerCta {
			...ContentfulButton
		}

		footerLogosCollection(limit: 15) {
			items {
				sys {
					id
				}
				__typename
				url
				height
				width
				contentType
				fileName
			}
		}
		footerNewsletterHeader
		footerNewsletterText {
			json
		}
		footerNavigationColumnOne {
			...ContentfulNavigationMenu
		}
		footerNavigationColumnTwo {
			...ContentfulNavigationMenu
		}
		footerNavigationContact {
			...ContentfulNavigationMenu
		}
		footerNavigationSocial {
			...ContentfulNavigationMenu
		}
		productPageAdditionalSectionsCollection(limit: 10) {
			items {
				...ContentfulColumns
				...ContentfulContactForm
				...ContentfulFeaturedProduct
				...ContentfulFiftyFifty
				...ContentfulGalleryAsSection
				...ContentfulWideImage
				...ContentfulTextSection
				...ContentfulSlideshow
			}
		}
		galleryPageAdditionalSectionsCollection(limit: 10) {
			items {
				...ContentfulColumns
				...ContentfulContactForm
				...ContentfulFeaturedProduct
				...ContentfulFiftyFifty
				...ContentfulGalleryAsSection
				...ContentfulWideImage
				...ContentfulTextSection
				...ContentfulSlideshow
			}
		}
		shareDrawerHeader
		inquireDrawerHeader
		thankYouPageComponent {
			...ContentfulWideImage
		}
	}
`

export default ContentfulSiteSettings
