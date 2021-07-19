import { gql } from 'graphql-request'

const pagesQuery = gql`
	query pagesQuery($type: String) {
		pageCollection(limit: 300, where: { internalName_not_contains: "PLACEHOLDER", type: $type }) {
			items {
				slug
				type
				internalName
			}
		}
	}
`

export default pagesQuery
