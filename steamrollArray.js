function steamrollArray(arr) {
	return arr.reduce((a, b) => {

		if (Array.isArray(b)) {
			return [...a, ...steamrollArray(b)]
		}

		return [...a, b]
	}, [])
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));