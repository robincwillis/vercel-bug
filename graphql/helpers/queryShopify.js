import { GraphQLClient } from 'graphql-request'

async function queryShopify(query, variables) {
	const endpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_NAME}.myshopify.com/api/2021-04/graphql.json`
	try {
		const graphQLClient = new GraphQLClient(endpoint, {
			headers: {
				'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
			},
		})
		const result = await graphQLClient.request(query, variables)
		return result
	} catch (err) {
		if (err.response) {
			err?.response?.errors.map((error) => console.log(error?.message))
		} else {
			console.log(err)
		}
		return err.response
	}
}

export default queryShopify
