import { gql } from 'graphql-request'

const ContentfulContentItem = gql`
	fragment ContentfulContentItem on ContentItem {
		sys {
			id
		}
		__typename
		leftEyebrow
		leftText {
			json
		}
		leftActionsCollection(limit: 2) {
			items {
				...ContentfulLink
				...ContentfulButton
			}
		}
		rightMedia {
			__typename
			url
			height
			width
			contentType
			fileName
		}
		rightOverlayTextColor
		rightText {
			json
		}
		rightActionsCollection(limit: 2) {
			items {
				...ContentfulLink
				...ContentfulButton
			}
		}
	}
`

export default ContentfulContentItem
