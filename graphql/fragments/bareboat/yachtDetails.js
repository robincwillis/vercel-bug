const yachtDetailsFragment = `
	fragment YachtDetails on Yacht{
		id
		yachtModel
		picturesURL
		name
		buildYear
		sailType
		cabins
		cabinsCrew
		yachtCategory
		wc
		wcCrew
		standardYachtEquipment{
			defaultName
			uid
			nausysEquipmentId
			nausysId
		}
		seasonData{
			edges{
				node{
					relevant
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
`
export default yachtDetailsFragment
