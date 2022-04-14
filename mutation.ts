function mutation(arr:string[]) {
	let isAllExist = true

	arr[1].split('').forEach(character => {
		if (arr[0].toLowerCase().indexOf(character.toLowerCase()) === -1) {
			isAllExist = false;
		}
	})

	return isAllExist;
}

console.log(mutation(["hello", "hey"]));