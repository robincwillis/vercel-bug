import { gql } from 'graphql-request'

import { CONTENTFUL_DESTINATIONS_FRAGMENTS } from 'graphql/fragments/contentful'

const destinationsQuery = gql`
	query destinationsQuery($preview: Boolean) {
		destinationCollection(limit: 200, preview: $preview, where: { displayName_not_contains: "PLACEHOLDER" }) {
			items {
				...ContentfulDestination
			}
		}
	}
	${CONTENTFUL_DESTINATIONS_FRAGMENTS}
`

export default destinationsQuery

export const destinationsQueryForPrivateBookingSearch = gql`
	query destinationsQuery($preview: Boolean) {
		destinationCollection(limit: 200, preview: $preview, where: { displayName_not_contains: "PLACEHOLDER", private: true }) {
			items {
				sys {
					id
				}
				__typename
				displayName
				country
				region {
					sys {
						id
					}
					displayName
				}
			}
		}
	}
`

export const destinationsQueryForGroupBookingSearch = gql`
	query destinationsQuery($preview: Boolean) {
		destinationCollection(limit: 200, preview: $preview, where: { displayName_not_contains: "PLACEHOLDER", group: true }) {
			items {
				sys {
					id
				}
				__typename
				displayName
				country
				region {
					sys {
						id
					}
					displayName
				}
			}
		}
	}
`

export const destinationsQueryForBareboatBookingSearch = gql`
	query destinationsQuery($preview: Boolean) {
		destinationCollection(limit: 200, preview: $preview, where: { displayName_not_contains: "PLACEHOLDER", bareboat: true }) {
			items {
				sys {
					id
				}
				__typename
				displayName
				country
				region {
					sys {
						id
					}
					displayName
				}
			}
		}
	}
`

export const destinationsQueryForSearch = gql`
	query destinationsQueryForSearch {
		destinationCollection(limit: 200, where: { displayName_not_contains: "PLACEHOLDER" }) {
			items {
				sys {
					id
				}
				__typename
				displayName
				country
				region {
					sys {
						id
					}
					displayName
				}
			}
		}
	}
`
