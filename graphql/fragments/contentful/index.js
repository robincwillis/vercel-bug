// page-level imports
import CONTENTFUL_SEO_FRAGMENT from './contentfulSeo'

// section-level imports
import CONTENTFUL_COLUMNS_FRAGMENT from './contentfulColumns'
import CONTENTFUL_CONTACT_FORM_FRAGMENT from './contentfulContactForm'
import CONTENTFUL_FEATURED_PRODUCT_FRAGMENT from './contentfulFeaturedProduct'
import CONTENTFUL_FIFTY_FIFTY_FRAGMENT from './contentfulFiftyFifty'
import CONTENTFUL_GALLERY_AS_SECTION_FRAGMENT from './contentfulGalleryAsSection'
import CONTENTFUL_JOURNEY_FINDER_FRAGMENT from './contentfulJourneyFinder'
import CONTENTFUL_LIST_FRAGMENT from './contentfulList'
import CONTENTFUL_PRODUCTS_LIST_FRAGMENT from './contentfulProductsList'
import CONTENTFUL_SLIDESHOW_FRAGMENT from './contentfulSlideshow'
import CONTENTFUL_TEXT_SECTION_FRAGMENT from './contentfulTextSection'
import CONTENTFUL_WIDE_IMAGE_FRAGMENT from './contentfulWideImage'

// block level imports
import CONTENTFUL_GALLERY_IN_LIST_FRAGMENT from './contentfulGalleryInList'
import CONTENTFUL_TWO_COLUMN_TEXT_FRAGMENT from './contentfulTwoColumnText'
import CONTENTFUL_ONE_COLUMN_TEXT_FRAGMENT from './contentfulOneColumnText'
import CONTENTFUL_ITINERARY_FRAGMENT from './contentfulItinerary'

import CONTENTFUL_CARD_FRAGMENT from './contentfulCard'
import CONTENTFUL_PERSON_FRAGMENT from './contentfulPerson'
import CONTENTFUL_DESTINATION_FRAGMENT from './contentfulDestination'
import CONTENTFUL_REGION_FRAGMENT from './contentfulRegion'
import CONTENTFUL_VESSEL_FRAGMENT from './contentfulVessel'
import CONTENTFUL_CONTENT_ITEM_FRAGMENT from './contentfulContentItem'
import CONTENTFUL_BUTTON_FRAGMENT from './contentfulButton'
import CONTENTFUL_LINK_FRAGMENT from './contentfulLink'

// other
import CONTENTFUL_BOOKING_OPTION_FRAGMENT from './contentfulBookingOption'
import CONTENTFUL_PRIVATE_JOURNEY_FRAGMENT, {
	ContentfulPrivateJourneySummary as CONTENTFUL_PRIVATE_JOURNEY_SUMMARY_FRAGMENT,
	ContentfulPrivateJourneySections as CONTENTFUL_PRIVATE_JOURNEY_SECTIONS_FRAGMENT,
} from './contentfulPrivateJourney'
import CONTENTFUL_PRIVATE_JOURNEY_IN_FINDER_FRAGMENT from './contentfulPrivateJourneyInFinder'
import CONTENTFUL_GALLERY_FRAGMENT from './contentfulGallery'
import CONTENTFUL_GROUP_JOURNEY_FRAGMENT, {
	ContentfulGroupJourneySummary as CONTENTFUL_GROUP_JOURNEY_SUMMARY_FRAGMENT,
	ContentfulGroupJourneySections as CONTENTFUL_GROUP_JOURNEY_SECTIONS_FRAGMENT,
} from './contentfulGroupJourney'

// note:
// page=>sections and sitesettings=>[x]_additional_sections are currently identical
// this can be changed but would require two seperate fragment groupings.

export const CONTENTFUL_PAGE_FRAGMENTS = `
	${CONTENTFUL_SEO_FRAGMENT}
	${CONTENTFUL_COLUMNS_FRAGMENT}
	${CONTENTFUL_FIFTY_FIFTY_FRAGMENT}
	${CONTENTFUL_GALLERY_AS_SECTION_FRAGMENT}
	${CONTENTFUL_JOURNEY_FINDER_FRAGMENT}
	${CONTENTFUL_SLIDESHOW_FRAGMENT}
	${CONTENTFUL_TEXT_SECTION_FRAGMENT}
	${CONTENTFUL_WIDE_IMAGE_FRAGMENT}
	${CONTENTFUL_LIST_FRAGMENT}

	${CONTENTFUL_CARD_FRAGMENT}
	${CONTENTFUL_PERSON_FRAGMENT}
	${CONTENTFUL_DESTINATION_FRAGMENT}
	${CONTENTFUL_REGION_FRAGMENT}
	${CONTENTFUL_CONTENT_ITEM_FRAGMENT}
  ${CONTENTFUL_BUTTON_FRAGMENT}
	${CONTENTFUL_LINK_FRAGMENT}
	${CONTENTFUL_VESSEL_FRAGMENT}
	${CONTENTFUL_GALLERY_IN_LIST_FRAGMENT}
	${CONTENTFUL_CONTACT_FORM_FRAGMENT}
	${CONTENTFUL_PRIVATE_JOURNEY_SUMMARY_FRAGMENT}
	${CONTENTFUL_GROUP_JOURNEY_SUMMARY_FRAGMENT}

`

export const CONTENTFUL_QUOTE_PAGE_FRAGMENTS = `
	${CONTENTFUL_GALLERY_IN_LIST_FRAGMENT}
	${CONTENTFUL_PERSON_FRAGMENT}
	${CONTENTFUL_TWO_COLUMN_TEXT_FRAGMENT}
	${CONTENTFUL_ONE_COLUMN_TEXT_FRAGMENT}
	${CONTENTFUL_VESSEL_FRAGMENT}
	${CONTENTFUL_DESTINATION_FRAGMENT}
	${CONTENTFUL_REGION_FRAGMENT}
	${CONTENTFUL_BOOKING_OPTION_FRAGMENT}
	${CONTENTFUL_ITINERARY_FRAGMENT}
`

export const CONTENTFUL_ADDITIONAL_PAGE_FRAGMENTS = `
  ${CONTENTFUL_SEO_FRAGMENT}

  ${CONTENTFUL_COLUMNS_FRAGMENT}
  ${CONTENTFUL_CONTACT_FORM_FRAGMENT}
  ${CONTENTFUL_FEATURED_PRODUCT_FRAGMENT}
  ${CONTENTFUL_FIFTY_FIFTY_FRAGMENT}
  ${CONTENTFUL_GALLERY_AS_SECTION_FRAGMENT}
  ${CONTENTFUL_SLIDESHOW_FRAGMENT}
  ${CONTENTFUL_TEXT_SECTION_FRAGMENT}
  ${CONTENTFUL_WIDE_IMAGE_FRAGMENT}

	${CONTENTFUL_CARD_FRAGMENT}
	${CONTENTFUL_PERSON_FRAGMENT}
	${CONTENTFUL_DESTINATION_FRAGMENT}
	${CONTENTFUL_REGION_FRAGMENT}
	${CONTENTFUL_CONTENT_ITEM_FRAGMENT}
	${CONTENTFUL_BUTTON_FRAGMENT}
	${CONTENTFUL_LINK_FRAGMENT}

	${CONTENTFUL_PRIVATE_JOURNEY_SUMMARY_FRAGMENT}
	${CONTENTFUL_GROUP_JOURNEY_SUMMARY_FRAGMENT}
`

export const CONTENTFUL_DESTINATIONS_FRAGMENTS = `
	${CONTENTFUL_DESTINATION_FRAGMENT}
	${CONTENTFUL_REGION_FRAGMENT}
`

export const CONTENTFUL_REGION_FRAGMENTS = `
 	${CONTENTFUL_REGION_FRAGMENT}
`

export const CONTENTFUL_PRIVATE_JOURNEY_QUOTES_FRAGMENTS = `
	${CONTENTFUL_PRIVATE_JOURNEY_FRAGMENT}
	${CONTENTFUL_DESTINATION_FRAGMENT}
	${CONTENTFUL_REGION_FRAGMENT}

	${CONTENTFUL_GALLERY_IN_LIST_FRAGMENT}
	${CONTENTFUL_PERSON_FRAGMENT}
	${CONTENTFUL_ONE_COLUMN_TEXT_FRAGMENT}
	${CONTENTFUL_TWO_COLUMN_TEXT_FRAGMENT}
	${CONTENTFUL_VESSEL_FRAGMENT}
`

export const CONTENTFUL_PRIVATE_JOURNEY_FRAGMENTS = `
	${CONTENTFUL_PRIVATE_JOURNEY_FRAGMENT}
	${CONTENTFUL_DESTINATION_FRAGMENT}
	${CONTENTFUL_REGION_FRAGMENT}
	${CONTENTFUL_VESSEL_FRAGMENT}
`

export const CONTENTFUL_PRIVATE_JOURNEY_SECTIONS_FRAGMENTS = `
	${CONTENTFUL_PRIVATE_JOURNEY_SECTIONS_FRAGMENT}
	${CONTENTFUL_ITINERARY_FRAGMENT}
	${CONTENTFUL_GALLERY_IN_LIST_FRAGMENT}
	${CONTENTFUL_PERSON_FRAGMENT}
	${CONTENTFUL_DESTINATION_FRAGMENT}
	${CONTENTFUL_REGION_FRAGMENT}
	${CONTENTFUL_ONE_COLUMN_TEXT_FRAGMENT}
	${CONTENTFUL_TWO_COLUMN_TEXT_FRAGMENT}
`

export const CONTENTFUL_GROUP_JOURNEY_FRAGMENTS = `
	${CONTENTFUL_GROUP_JOURNEY_FRAGMENT}
	${CONTENTFUL_DESTINATION_FRAGMENT}
	${CONTENTFUL_REGION_FRAGMENT}
`

export const CONTENTFUL_GROUP_JOURNEY_SECTIONS_FRAGMENTS = `
	${CONTENTFUL_GROUP_JOURNEY_SECTIONS_FRAGMENT}	
	${CONTENTFUL_GALLERY_IN_LIST_FRAGMENT}
	${CONTENTFUL_PERSON_FRAGMENT}
	${CONTENTFUL_DESTINATION_FRAGMENT}
	${CONTENTFUL_ONE_COLUMN_TEXT_FRAGMENT}
	${CONTENTFUL_TWO_COLUMN_TEXT_FRAGMENT}
	${CONTENTFUL_VESSEL_FRAGMENT}
	${CONTENTFUL_ITINERARY_FRAGMENT}
	${CONTENTFUL_REGION_FRAGMENT}
`

export const CONTENTFUL_PRIVATE_JOURNEY_IN_FINDER_FRAGMENTS = `
	${CONTENTFUL_PRIVATE_JOURNEY_IN_FINDER_FRAGMENT}
	${CONTENTFUL_DESTINATION_FRAGMENT}
	${CONTENTFUL_REGION_FRAGMENT}
`

export const CONTENTFUL_GALLERY_FRAGMENTS = `
	${CONTENTFUL_GALLERY_FRAGMENT}
	${CONTENTFUL_DESTINATION_FRAGMENT}
	${CONTENTFUL_REGION_FRAGMENT}
`
