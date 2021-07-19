import { gql } from 'graphql-request'

const ContentfulNavigationMenu = gql`
	fragment ContentfulNavigationMenu on NavigationMenu {
		sys {
			id
		}
		sectionHeader
		navigationLinksCollection(limit: 10) {
			items {
				...ContentfulNavigationLink
			}
		}
	}
`

export default ContentfulNavigationMenu
