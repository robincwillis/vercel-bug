const freeYachtsFragment = `
	fragment FreeYachtsFragment on FreeYachts {
		totalPages
		totalCount
		currentPage
		resultsPerPage
		foreignExchangeRates{
      uid
      rate
      USD
      timestamp
    }
		results {
			edges {
				cursor
				node {
					periodFrom {
						day
						month
						year
					}
					periodTo {
						day
						month
						year
					}
					price{
						priceListPrice
						clientPrice
						discounts{
							type
							amount
							nausysDiscountId
						}
					}
					yacht {
						id
						uid
						loa
						beam
						draft
						numberOfRudderBlades
						fuelTank
						displacement
						beam
						mainPictureUrl
						yachtModel
						countryName
						itineraryRegion
						picturesURL
						name
						buildYear
						builderName
						sailType
						cabins
						cabinsCrew
						yachtCategory
						nausysLocationId
						waterTank
						wc
						wcCrew			
						berthsCabin
						berthsSalon
						countryCode
						depositCurrency
						twoLetterCountryCode
						standardYachtEquipment{
							defaultName
							nausysEquipmentId
							quantity
							nausysId
						}
						servicesForPeriod{
							serviceName
							obligatory
							currency
							priceMeasureName
							amount
						}
						additionalEquipmentForPeriod{
							defaultName 	
							quantity
						}	
						priceForPeriod{
							price
							type
							currency
							to { day month year }
							from { day month year }
						}
						pictures{
							mainPicture
							layoutPicture
							catalogPhoto
							src
						}
						seasonData{
							edges{
								node{
									defaultSeason
									prices{
										edges{
											node{
												from{
													day month year
												}
												to{
													day month year
												}
												relevant
												price
												type
											}
										}
									}
									companyUid
								}
							}
						}
					}
				}
			}
		}
	}
`
export default freeYachtsFragment
