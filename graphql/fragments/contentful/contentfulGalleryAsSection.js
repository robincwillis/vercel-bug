import { gql } from 'graphql-request'

const ContentfulGalleryAsSection = gql`
	fragment ContentfulGalleryAsSection on Gallery {
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
		imagesCollection(limit: 5) {
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

export default ContentfulGalleryAsSection
