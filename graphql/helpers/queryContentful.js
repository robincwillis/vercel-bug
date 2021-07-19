import { GraphQLClient } from 'graphql-request'
import compress from 'graphql-query-compress'

async function queryContentful(query, variables) {
	const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`
	const token = variables?.preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN

	try {
		const graphQLClient = new GraphQLClient(endpoint, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		})

		const result = await graphQLClient.request(compress(query), variables)
		return { data: result }
	} catch (err) {
		if (err.response) {
			err?.response?.errors.map((error) => console.log(error.message))
		} else {
			console.log(err)
		}
		return err.response
	}
}

export default queryContentful
