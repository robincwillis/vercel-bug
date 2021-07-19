import freeYachtsFragment from 'graphql/fragments/bareboat/freeYachts'
import destinationIdsFragment from 'graphql/fragments/bareboat/destinationIdsFragment'
import yachtCategoryFragment from 'graphql/fragments/bareboat/yachtCategory'
import { makeGraphQLArgs } from 'graphql/helpers/makeParams'

export const freeYachtsRequest = (object, type) => {
	const string = makeGraphQLArgs(object)
	return `
		{
			${type}(${string}){
				...FreeYachtsFragment
			}
		}
		${freeYachtsFragment}
	`
}
export const destinationIdQuery = (object, type) => {
	const string = makeGraphQLArgs(object)
	return `
		{
			${type}(${string}){
				...DestinationIdsFragment
			}
		}
		${destinationIdsFragment}
	`
}
export const yachtCategoryQuery = (object, type) => {
	const string = makeGraphQLArgs(object)
	return `
		{
			${type}(${string}){
				...YachtCategoryFragment
			}
		}
		${yachtCategoryFragment}
	`
}
