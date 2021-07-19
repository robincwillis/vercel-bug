import { gql } from 'graphql-request'

const ContentfulRegion = gql`
	fragment ContentfulRegion on Region {
		sys {
			id
		}
		__typename
		displayName
	}
`

export default ContentfulRegion
