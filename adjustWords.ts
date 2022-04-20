function adjustWord(str: string) {
	return str[0].toUpperCase() + str.slice(1, str.length).toLowerCase()
  }
  
  function StringChallenge(str: string) {
  
	// code goes here  
	const words: string[] = [];
  
	for (let i = 0; i < str.length; i++) {
	  let word = '';
	  while ((/[a-zA-Z]/).test(str[i]) && i < str.length) {
		word += str[i];
		i++;
	  }
	  words.push(word)
	  word = '';
	}
  
	const result = words.map((word, index) => {
	  if(index === 0){
		return word.toLowerCase()
	  }
  
	  return adjustWord(word)
	}).join('')
  
	return result;
  }
  
  // keep this function call here 
  // @ts-ignore
  console.log(StringChallenge(readline()));