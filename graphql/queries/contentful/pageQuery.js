import { gql } from 'graphql-request'
import { CONTENTFUL_PAGE_FRAGMENTS } from 'graphql/fragments/contentful'

const pageQuery = gql`
	${CONTENTFUL_PAGE_FRAGMENTS}
	query pageQuery($slug: String, $limit: Int, $preview: Boolean, $skip: Int) {
		pageCollection(where: { slug: $slug }, preview: $preview, limit: 1) {
			items {
				sys {
					id
				}
				slug
				title
				seo {
					...ContentfulSeo
				}
				sectionsCollection(limit: $limit, skip: $skip, preview: $preview) {
					limit
					total
					skip
					items {
						...ContentfulColumns
						...ContentfulFiftyFifty
						...ContentfulJourneyFinder
						...ContentfulWideImage
						...ContentfulTextSection
						...ContentfulSlideshow
						...ContentfulGalleryAsSection
						...ContentfulList
						...ContentfulContactForm
					}
				}
			}
		}
	}
`

export default pageQuery
