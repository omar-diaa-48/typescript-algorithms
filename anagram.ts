function validAnagram(str1: string, str2: string): boolean {
	const str1Characters = {};
	const str2Characters = {};

	for (let i = 0; i < str1.length; i++) {
		//@ts-ignore
		str1Characters[str1[i]] = (str1Characters[str1[i]] || 0) + 1
	}

	for (let i = 0; i < str2.length; i++) {
		//@ts-ignore
		str2Characters[str2[i]] = (str2Characters[str2[i]] || 0) + 1
	}

	for (const character in str1Characters) {
		
		//@ts-ignore
		if(str2Characters[character] !== str1Characters[character]){
			return false;
		}

	}

	return true;
}

console.log(validAnagram('aaaz', 'azaa'));
