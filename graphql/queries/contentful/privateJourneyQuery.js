/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import { gql } from 'graphql-request'
import { CONTENTFUL_PRIVATE_JOURNEY_FRAGMENTS, CONTENTFUL_PRIVATE_JOURNEY_SECTIONS_FRAGMENTS } from 'graphql/fragments/contentful'

const privateJourneyQuery = gql`
	${CONTENTFUL_PRIVATE_JOURNEY_FRAGMENTS}
	query privateJourneyQuery($slug: String, $preview: Boolean) {
		privateJourneyCollection(where: { slug: $slug }, preview: $preview, limit: 1) {
			items {
				...ContentfulPrivateJourney
			}
		}
	}
`

export const privateJourneySectionsQuery = gql`
	${CONTENTFUL_PRIVATE_JOURNEY_SECTIONS_FRAGMENTS}
	query privateJourneyQuery($slug: String, $preview: Boolean) {
		privateJourneyCollection(where: { slug: $slug }, preview: $preview, limit: 1) {
			items {
				...ContentfulPrivateJourneySections
			}
		}
	}
`

export default privateJourneyQuery
