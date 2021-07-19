import { gql } from 'graphql-request'

const ContentfulFiftyFifty = gql`
	fragment ContentfulFiftyFifty on FiftyFifty {
		sys {
			id
		}
		__typename
		theme
		media {
			url
			height
			width
			contentType
			fileName
		}
		mediaPlacement
		mediaWidth
		eyebrow
		text {
			json
			# references {
			# 	... on ContentfulAsset {
			#     contentful_id
			#     __typename
			#     url
			#     contentType
			#     fileName
			#   }
			# }
		}
		paragraphSize
		actionsCollection(limit: 2) {
			items {
				...ContentfulLink
				...ContentfulButton
			}
		}
		verticalAlignment
	}
`

export default ContentfulFiftyFifty
