import { gql } from 'graphql-request'

const ContentfulDestination = gql`
	fragment ContentfulDestination on Destination {
		sys {
			id
		}
		__typename
		displayName
		region {
			...ContentfulRegion
		}
		country
		image {
			__typename
			url
			height
			width
			contentType
			fileName
		}
	}
`

export default ContentfulDestination
