function rot13(str: string) {
	const MIN_LIMIT = 65;
	const MAX_LIMIT = 90;
	return str.split('').reduce((a, b) => {
		if (!(/[A-Z]/.test(b))) {
			return a + b;
		}

		let charCode = b.charCodeAt(0) - 13

		if (charCode < MIN_LIMIT) {
			charCode = MAX_LIMIT - (13 - b.charCodeAt(0) + MIN_LIMIT) + 1;
		}

		const letter = String.fromCharCode(charCode)

		return a + letter;
	}, '');
}

console.log(rot13("SERR PBQR PNZC"));