import { gql } from 'graphql-request'

const ContentfulContactForm = gql`
	fragment ContentfulContactForm on ContactForm {
		sys {
			id
		}
		__typename
		theme
	}
`

export default ContentfulContactForm
