import { gql } from 'graphql-request'

const ContentfulJourneyFinder = gql`
	fragment ContentfulJourneyFinder on JourneyFinder {
		sys {
			id
		}
		__typename
		type
		displayTitle
		description {
			json
		}
		media {
			__typename
			url
			height
			width
			contentType
			fileName
		}
	}
`

export default ContentfulJourneyFinder
