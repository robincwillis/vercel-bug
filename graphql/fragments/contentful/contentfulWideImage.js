import { gql } from 'graphql-request'

const ContentfulWideImage = gql`
	fragment ContentfulWideImage on WideImage {
		sys {
			id
		}
		__typename
		theme
		media {
			__typename
			url
			height
			width
			contentType
			fileName
		}
		mediaMedium {
			__typename
			url
			height
			width
			contentType
			fileName
		}
		mediaSmall {
			__typename
			url
			height
			width
			contentType
			fileName
		}
		width
		height
		eyebrow
		text {
			json
		}
		actionsCollection(limit: 2) {
			items {
				...ContentfulButton
				...ContentfulLink
			}
		}
		paragraphSize
		overlayPlacement
		overlayTextAlignment
		overlayTextColor
	}
`

export default ContentfulWideImage
