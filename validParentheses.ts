function isValid(s: string) {
	const left: string[] = [];

	const legend = {
		'(': ')',
		'{': '}',
		'[': ']'
	};

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(' || s[i] === '{' || s[i] === '[') {

			left.push(s[i]);

		} else if (legend[left.pop()] !== s[i]) {

			return false;

		}
	}

	return left.length ? 0 : 1;
};