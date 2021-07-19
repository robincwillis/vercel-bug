import { gql } from 'graphql-request'

const galleriesQuery = gql`
	query galleriesQuery {
		galleryCollection(limit: 200, where: { internalName_not_contains: "PLACEHOLDER" }) {
			items {
				slug
				internalName
			}
		}
	}
`

export default galleriesQuery
