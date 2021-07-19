import { CONTENTFUL_PRIVATE_JOURNEY_IN_FINDER_FRAGMENTS } from 'graphql/fragments/contentful'
import CONTENTFUL_VESSEL_FRAGMENT from 'graphql/fragments/contentful/contentfulVessel'
import { gql } from 'graphql-request'

const collectionsQuery = gql`
	${CONTENTFUL_PRIVATE_JOURNEY_IN_FINDER_FRAGMENTS}
	${CONTENTFUL_VESSEL_FRAGMENT}
	query collectionsQuery($preview: Boolean) {
		privateJourneyCollection(limit: 50, preview: $preview, where: { internalName_not_contains: "PLACEHOLDER" }) {
			items {
				...ContentfulPrivateJourneyInFinder
			}
		}
		vesselCollection(limit: 100, preview: $preview, where: { internalName_not_contains: "PLACEHOLDER" }) {
			items {
				...ContentfulVessel
			}
		}
		destinationCollection(limit: 100, preview: $preview, where: { displayName_not_contains: "PLACEHOLDER" }) {
			items {
				...ContentfulDestination
			}
		}
	}
`

export default collectionsQuery
