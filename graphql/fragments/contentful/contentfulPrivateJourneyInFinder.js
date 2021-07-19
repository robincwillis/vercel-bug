import { gql } from 'graphql-request'

const ContentfulPrivateJourneyInFinder = gql`
	fragment ContentfulPrivateJourneyInFinder on PrivateJourney {
		sys {
			id
		}
		internalName
		displayTitle
		slug
		mainImage {
			__typename
			url
			height
			width
			contentType
			fileName
		}
		destination {
			...ContentfulDestination
		}
		description {
			json
		}
		minimumEstimatedPrice
		maximumEstimatedPrice
		season
	}
`

export default ContentfulPrivateJourneyInFinder
