import { gql } from 'graphql-request'

const ContentfulProductsList = gql`
	fragment ContentfulProductsList on ProductsList {
		sys {
			id
		}
		__typename
		internalName
		shopifyProducts
	}
`

export default ContentfulProductsList
