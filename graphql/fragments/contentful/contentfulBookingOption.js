import { gql } from 'graphql-request'

const ContentfulBookingOption = gql`
	fragment ContentfulBookingOption on BookingOption {
		sys {
			id
		}
		__typename
		internalName
		displayName
		vessel {
			...ContentfulVessel
		}
		pricePerPerson
		features
	}
`

export default ContentfulBookingOption
