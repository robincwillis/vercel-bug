import { gql } from 'graphql-request'

const ContentfulVessel = gql`
	fragment ContentfulVessel on Vessel {
		sys {
			id
		}
		__typename
		internalName
		# slug
		make
		year
		media {
			__typename
			url
			height
			width
			contentType
			fileName
		}
		additionalImagesCollection(limit: 10) {
			items {
				__typename
				url
				height
				width
				contentType
				fileName
			}
		}
		cabins
		passengers
		baths
		features
		shortDescription
		description {
			json
		}
		minimumEstimatedPrice
		maximumEstimatedPrice
		firebaseDocumentId
	}
`

export default ContentfulVessel
