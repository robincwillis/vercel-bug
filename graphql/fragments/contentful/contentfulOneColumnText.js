import { gql } from 'graphql-request'

const ContentfulOneColumnText = gql`
	fragment ContentfulOneColumnText on OneColumnText {
		__typename
		sys {
			id
		}
		anchoredHeader
		columnOne {
			json
		}
	}
`

export default ContentfulOneColumnText
