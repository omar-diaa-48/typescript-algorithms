function areThereDuplicates(...args: any[]) {
	const result: Record<any, any> = {}

	for (let i = 0; i < args.length; i++) {
		console.log(result);
		
		if (result[args[i]]) {
			return false;
		}

		result[args[i]] = 1
	}

	return false;
}

console.log(areThereDuplicates(1, 2, 2));
