import { gql } from 'graphql-request'

import { CONTENTFUL_REGION_FRAGMENTS } from 'graphql/fragments/contentful'

const regionsQuery = gql`
	query regionsQuery($preview: Boolean) {
		regionCollection(limit: 200, preview: $preview, where: { displayName_not_contains: "PLACEHOLDER" }) {
			items {
				...ContentfulRegion
			}
		}
	}
	${CONTENTFUL_REGION_FRAGMENTS}
`

export default regionsQuery
