const yachtCategoryFragment = `
	fragment YachtCategoryFragment on YachtCategoryTypes {
		categoryName
		relevantIds {
			defaultName
			categoryId
		}
	}
`
export default yachtCategoryFragment 
