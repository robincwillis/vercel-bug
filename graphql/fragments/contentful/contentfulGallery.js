import { gql } from 'graphql-request'

const ContentfulGallery = gql`
	fragment ContentfulGallery on Gallery {
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
		imagesCollection(limit: 20) {
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

export default ContentfulGallery
