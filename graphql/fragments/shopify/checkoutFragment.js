import { gql } from 'graphql-request'

// https://shopify.dev/docs/storefront-api/reference/checkouts/checkout

const CHECKOUT_FRAGMENT = gql`
	fragment checkout on Checkout {
		id
		webUrl
		ready
		completedAt
		subtotalPriceV2 {
			amount
			currencyCode
		}
		totalTaxV2 {
			amount
			currencyCode
		}
		totalPriceV2 {
			amount
			currencyCode
		}
		lineItems(first: 250) {
			pageInfo {
				hasNextPage
				hasPreviousPage
			}
			edges {
				node {
					id
					title
					variant {
						id
						title
						selectedOptions {
							name
							value
						}
						image {
							transformedSrc
						}
						priceV2 {
							amount
							currencyCode
						}
					}
					quantity
				}
			}
		}
	}
`

export default CHECKOUT_FRAGMENT
