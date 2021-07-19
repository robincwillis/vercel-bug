import { gql } from 'graphql-request'
import { CONTENTFUL_GALLERY_FRAGMENTS } from 'graphql/fragments/contentful'

const galleryQuery = gql`
	${CONTENTFUL_GALLERY_FRAGMENTS}
	query galleryQuery($slug: String, $preview: Boolean) {
		galleryCollection(where: { slug: $slug }, preview: $preview, limit: 1) {
			items {
				...ContentfulGallery
			}
		}
	}
`

export default galleryQuery
