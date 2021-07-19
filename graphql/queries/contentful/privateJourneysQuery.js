import { gql } from 'graphql-request'
import { CONTENTFUL_PRIVATE_JOURNEY_FRAGMENTS } from 'graphql/fragments/contentful'

const privateJourneysQuery = gql`
	${CONTENTFUL_PRIVATE_JOURNEY_FRAGMENTS}
	query privateJourneysQuery {
		privateJourneyCollection(limit: 300, where: { internalName_not_contains: "PLACEHOLDER" }) {
			items {
				slug
				...ContentfulPrivateJourney
			}
		}
	}
`
export default privateJourneysQuery
