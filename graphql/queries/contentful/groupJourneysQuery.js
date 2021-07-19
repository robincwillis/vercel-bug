import { gql } from 'graphql-request'
import { CONTENTFUL_GROUP_JOURNEY_FRAGMENTS, CONTENTFUL_GROUP_JOURNEY_SECTIONS_FRAGMENTS } from 'graphql/fragments/contentful'

const groupJourneysQuery = gql`
	${CONTENTFUL_GROUP_JOURNEY_FRAGMENTS}
	query groupJourneysQuery {
		groupJourneyCollection(limit: 200, where: { internalName_not_contains: "PLACEHOLDER" }) {
			items {
				slug
				...ContentfulGroupJourney
			}
		}
	}
`

export const groupJourneysSectionsQuery = gql`
	${CONTENTFUL_GROUP_JOURNEY_SECTIONS_FRAGMENTS}
	query groupJourneysSectionsQuery($slug: String, $preview: Boolean) {
		groupJourneyCollection(limit: 200, where: { internalName_not_contains: "PLACEHOLDER" }) {
			items {
				slug
				...ContentfulGroupJourneySections
			}
		}
	}
`

export default groupJourneysQuery
