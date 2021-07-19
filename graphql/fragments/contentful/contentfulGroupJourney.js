import { gql } from 'graphql-request'

const ContentfulGroupJourney = gql`
	fragment ContentfulGroupJourney on GroupJourney {
		sys {
			id
		}
		__typename
		displayTitle
		slug
		# seo {
		# 	...ContentfulSeo # included on page query
		# }
		shopifyProductHandle
		mainImage {
			__typename
			url
			height
			width
			contentType
			fileName
		}
		testimonialsCollection(limit: 10) {
			items {
				__typename
				rating
				testimonial {
					json
				}
				source
				image {
					__typename
					url
					height
					width
					contentType
					fileName
				}
			}
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
		startDate
		endDate

		description {
			json
		}
		summary
	}
`

export const ContentfulGroupJourneySections = gql`
	fragment ContentfulGroupJourneySections on GroupJourney {
		sys {
			id
		}
		crewCollection(limit: 10) {
			items {
				...ContentfulPerson
			}
		}

		vesselsCollection(limit: 10) {
			items {
				...ContentfulVessel
			}
		}

		galleriesCollection(limit: 10) {
			items {
				...ContentfulGalleryInList
			}
		}

		itinerary {
			...ContentfulItinerary
		}

		tripDetailsCollection(limit: 10) {
			items {
				...ContentfulOneColumnText
				...ContentfulTwoColumnText
			}
		}
	}
`

export const ContentfulGroupJourneySummary = gql`
	fragment ContentfulGroupJourneySummary on GroupJourney {
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
		startDate
		endDate

		description {
			json
		}
		summary
	}
`

export default ContentfulGroupJourney
