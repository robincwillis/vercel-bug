import { gql } from 'graphql-request'

const ContentfulPerson = gql`
	fragment ContentfulPerson on Person {
		sys {
			id
		}
		__typename
		displayTitle
		role
		description {
			json
		}
		media {
			__typename
			url
			height
			width
			contentType
			fileName
		}
	}
`

export default ContentfulPerson
