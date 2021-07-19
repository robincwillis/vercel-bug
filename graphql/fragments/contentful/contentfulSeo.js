import { gql } from 'graphql-request'

const ContentfulSeo = gql`
	fragment ContentfulSeo on Seo {
		sys {
			id
		}
		__typename
		keywords
		description
		shareImage {
			url
		}
	}
`

export default ContentfulSeo
