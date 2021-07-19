import { gql } from 'graphql-request'

const ContentfulCard = gql`
	fragment ContentfulCard on Card {
		sys {
			id
		}
		__typename
		image {
			__typename
			url
			height
			width
			contentType
			fileName
		}
		headline
		text {
			json
		}
		actionsCollection(limit: 2) {
			items {
				...ContentfulLink
				...ContentfulButton
			}
		}
	}
`

export default ContentfulCard
