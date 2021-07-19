import { gql } from 'graphql-request'

const ContentfulColumns = gql`
	fragment ContentfulColumns on InternalName {
		sys {
			id
		}
		__typename
		theme
		headline
		columnsCollection(limit: 3) {
			items {
				...ContentfulCard
				...ContentfulPerson
				...ContentfulTextSection
			}
		}
	}
`

export default ContentfulColumns
