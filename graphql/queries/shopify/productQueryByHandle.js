import { gql } from 'graphql-request'

const productQueryByHandle = gql`
	query productQueryByHandle($handle: String!) {
		productByHandle(handle: $handle) {
			id
			handle
			title
			tags
			variants(first: 10) {
				edges {
					node {
						id
						sku
						price
						availableForSale
						quantityAvailable
						selectedOptions {
							name
							value
						}
					}
				}
			}
		}
	}
`

export default productQueryByHandle
