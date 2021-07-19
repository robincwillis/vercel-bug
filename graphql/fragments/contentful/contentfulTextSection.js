import { gql } from 'graphql-request'

const ContentfulTextSection = gql`
	fragment ContentfulTextSection on TextSection {
		sys {
			id
		}
		__typename
		internalName
		theme
		eyebrow
		text {
			json
		}
		alignment
		showSearchBar
		actionsCollection(limit: 2) {
			items {
				...ContentfulButton
				...ContentfulLink
			}
		}
	}
`

export default ContentfulTextSection
