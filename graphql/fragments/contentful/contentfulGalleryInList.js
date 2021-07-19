import { gql } from 'graphql-request'

const ContentfulGalleryInList = gql`
	fragment ContentfulGalleryInList on Gallery {
		sys {
			id
		}
		__typename
		internalName
		slug
		year
		displayTitle
		destination {
			...ContentfulDestination
		}
		imagesCollection(limit: 1) {
			items {
				__typename
				url
				height
				width
				contentType
				fileName
			}
		}
	}
`

export default ContentfulGalleryInList
