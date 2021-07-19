import { gql } from 'graphql-request'

const productsQuery = gql`
	query productsQuery {
		products(first: 100) {
			edges {
				node {
					id
					handle
					title
					description
					descriptionHtml
					tags
					variants(first: 10) {
						edges {
							node {
								id
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
					images(first: 10) {
						edges {
							node {
								id
								src
								width
								height
							}
						}
					}
				}
			}
		}
	}
`

export default productsQuery
