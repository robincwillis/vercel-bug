import { gql } from 'graphql-request'

const ContentfulNavigationLink = gql`
	fragment ContentfulNavigationLink on NavigationLink {
		sys {
			id
		}
		__typename
		label
		to {
			slug
		}
		externalLink
		# dropdownLinksCollection(limit: 10) {
		# 	items {
		# 		sys {
		# 			id
		# 		}
		# 		__typename
		# 		label
		# 		to {
		# 			slug
		# 		}
		# 	}
		# }
	}
`

export default ContentfulNavigationLink
