import { gql } from 'graphql-request'

const ContentfulPrivateJourney = gql`
	fragment ContentfulPrivateJourney on PrivateJourney {
		sys {
			id
		}
		__typename
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
		mainImagesCollection(limit: 10) {
			items {
				__typename
				url
				height
				width
				contentType
				fileName
			}
		}
		destination {
			...ContentfulDestination
		}
		description {
			json
		}
		season
		minimumEstimatedPrice
		maximumEstimatedPrice
		vesselsCollection(limit: 3) {
			items {
				...ContentfulVessel
			}
		}
	}
`

export const ContentfulPrivateJourneySections = gql`
	fragment ContentfulPrivateJourneySections on PrivateJourney {
		sys {
			id
		}
		crewCollection(limit: 3) {
			items {
				...ContentfulPerson
			}
		}

		galleriesCollection(limit: 3) {
			items {
				...ContentfulGalleryInList
			}
		}

		itinerary {
			...ContentfulItinerary
		}

		tripDetailsCollection(limit: 3) {
			items {
				...ContentfulOneColumnText
				...ContentfulTwoColumnText
			}
		}
	}
`

export const ContentfulPrivateJourneySummary = gql`
	fragment ContentfulPrivateJourneySummary on PrivateJourney {
		sys {
			id
		}
		__typename
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
		season
		minimumEstimatedPrice
		maximumEstimatedPrice
	}
`

export default ContentfulPrivateJourney
