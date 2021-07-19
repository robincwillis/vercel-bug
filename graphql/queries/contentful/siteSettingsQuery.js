import CONTENTFUL_SITE_SETTINGS_FRAGMENT from 'graphql/fragments/contentful/contentfulSiteSettings'
import { gql } from 'graphql-request'

const siteSettingsQuery = gql`
	${CONTENTFUL_SITE_SETTINGS_FRAGMENT}
	query siteSettingsQuery($preview: Boolean) {
		siteSettingsCollection(limit: 1, preview: $preview, where: { internalName_not_contains: "PLACEHOLDER" }) {
			items {
				...ContentfulSiteSettings
			}
		}
	}
`
export default siteSettingsQuery
