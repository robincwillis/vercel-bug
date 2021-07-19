import { gql } from 'graphql-request'

const ContentfulItinerary = gql`
	fragment ContentfulItinerary on Itinerary {
		__typename
		sys {
			id
		}
		header
		itinerary {
			json
		}
	}
`

export default ContentfulItinerary
