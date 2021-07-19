import { gql } from 'graphql-request'

const ContentfulLink = gql`
	fragment ContentfulLink on Link {
		sys {
			id
		}
		__typename
		label
		linkToPage {
			slug
		}
		to
		openInNewTab
	}
`

export default ContentfulLink
