/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import { gql } from 'graphql-request'
import { CONTENTFUL_QUOTE_PAGE_FRAGMENTS } from 'graphql/fragments/contentful'

const privateJourneyQuoteQuery = gql`
	${CONTENTFUL_QUOTE_PAGE_FRAGMENTS}
	query privateJourneyQuoteQuery($slug: String, $preview: Boolean) {
		privateJourneyQuoteCollection(where: { slug: $slug }, preview: $preview, limit: 1) {
			items {
				sys {
					id
				}
				internalName
				displayTitle
				slug
				shopifyProductHandle
				status
				hidePricing
				description {
					json
				}
				startDate
				endDate

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

				bookingOptionsCollection(limit: 3) {
					items {
						...ContentfulBookingOption
					}
				}

				crewCollection(limit: 3) {
					items {
						...ContentfulPerson
					}
				}

				vesselsCollection(limit: 3) {
					items {
						...ContentfulVessel
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
		}
	}
`

export default privateJourneyQuoteQuery
