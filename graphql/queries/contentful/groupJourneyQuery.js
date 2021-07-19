import { gql } from 'graphql-request'
import { CONTENTFUL_GROUP_JOURNEY_FRAGMENTS, CONTENTFUL_GROUP_JOURNEY_SECTIONS_FRAGMENTS } from 'graphql/fragments/contentful'
import CONTENTFUL_SEO_FRAGMENT from 'graphql/fragments/contentful/contentfulSeo'

const groupJourneyQuery = gql`
	${CONTENTFUL_GROUP_JOURNEY_FRAGMENTS}
	${CONTENTFUL_SEO_FRAGMENT}
	query groupJourneyQuery($slug: String, $preview: Boolean) {
		groupJourneyCollection(where: { slug: $slug }, preview: $preview, limit: 1) {
			items {
				slug
				seo {
					...ContentfulSeo
				}
				...ContentfulGroupJourney
			}
		}
	}
`

export const groupJourneySectionsQuery = gql`
	${CONTENTFUL_GROUP_JOURNEY_SECTIONS_FRAGMENTS}
	query groupJourneySectionsQuery($slug: String, $preview: Boolean) {
		groupJourneyCollection(where: { slug: $slug }, preview: $preview, limit: 1) {
			items {
				slug
				...ContentfulGroupJourneySections
			}
		}
	}
`

export default groupJourneyQuery
