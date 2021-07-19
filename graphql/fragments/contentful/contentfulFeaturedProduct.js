import { gql } from 'graphql-request'

const ContentfulFeaturedProduct = gql`
	fragment ContentfulFeaturedProduct on FeaturedProduct {
		sys {
			id
		}
		__typename
		theme
		shopifyProduct
	}
`

export default ContentfulFeaturedProduct
