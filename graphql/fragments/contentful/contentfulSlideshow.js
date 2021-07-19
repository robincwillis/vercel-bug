import { gql } from 'graphql-request'

const ContentfulSlideshow = gql`
	fragment ContentfulSlideshow on Slideshow {
		sys {
			id
		}
		__typename
		theme
		itemsCollection(limit: 5) {
			items {
				...ContentfulContentItem
				...ContentfulGroupJourneySummary
				...ContentfulPrivateJourneySummary
			}
		}
	}
`

// ...ContentfulGroupJourney
// ...ContentfulPrivateJourney

export default ContentfulSlideshow
