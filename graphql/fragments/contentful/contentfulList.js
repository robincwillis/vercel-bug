import { gql } from 'graphql-request'

const ContentfulList = gql`
	fragment ContentfulList on List {
		sys {
			id
		}
		__typename
		anchoredHeader
		itemsCollection(limit: 5) {
			items {
				...ContentfulGalleryInList
				...ContentfulPerson
				...ContentfulVessel
			}
		}
	}
`

export default ContentfulList
