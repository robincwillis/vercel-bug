import { gql } from 'graphql-request'

const ContentfulButton = gql`
	fragment ContentfulButton on Button {
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
		theme
	}
`

export default ContentfulButton
