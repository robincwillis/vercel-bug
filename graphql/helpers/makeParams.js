export const sCheck = (e) => typeof(e) !== 'object' && (!isNaN(e * e) || e === String(true) || e === String(false))

export const makeGraphQLArgs = object => {
	let string = ''
	for (const key in object) {
		const value = object[key]
		if (sCheck(value)) {
			string = `${string} ${key}: ${value}`
		} else if (Array.isArray(value)) {
			string = `${string} ${key}: [${value.map((e) => (!sCheck(e) ? `"${e}"` : e)).join(', ')}]`
		} else if (typeof value === 'object') {
			string = `${string} ${key}: { ${makeGraphQLArgs(value)} } `
		} else {
			string = `${string} ${key}: "${value}"`
		}
	}
	return string
}

