import { gql } from 'graphql-request'

const ContentfulTwoColumnText = gql`
	fragment ContentfulTwoColumnText on TwoColumnText {
		__typename
		sys {
			id
		}
		anchoredHeader
		columnOne {
			json
		}
		columnTwo {
			json
		}
	}
`

export default ContentfulTwoColumnText
