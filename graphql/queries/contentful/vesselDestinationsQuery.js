import { gql } from 'graphql-request'
import CONTENTFUL_VESSEL_FRAGMENT from 'graphql/fragments/contentful/contentfulVessel'

const contentfulVesselsDestinationsQuery = gql`
	${CONTENTFUL_VESSEL_FRAGMENT}
	query vesselDestinationsQuery($preview: Boolean) {
		vesselCollection(limit: 150, preview: $preview, where: { internalName_not_contains: "PLACEHOLDER" }) {
			items {
				...ContentfulVessel
				locationsCollection(limit: 50) {
					items {
						sys {
							id
						}
					}
				}
			}
		}
	}
`

export default contentfulVesselsDestinationsQuery
