import { gql } from 'graphql-request'

const privateJourneyQuotesQuery = gql`
	query privateJourneyQuotesQuery {
		privateJourneyQuoteCollection(limit: 300, where: { internalName_not_contains: "PLACEHOLDER" }) {
			items {
				slug
				internalName
			}
		}
	}
`
export default privateJourneyQuotesQuery
