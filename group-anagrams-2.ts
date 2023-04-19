function groupAnagrams(strs: string[]): string[][] {
    const anagramsMap = new Map<string, string[]>();

    strs.forEach((word) => {
        const sortedWord = word.split('').sort().toString();

        if (anagramsMap.has(sortedWord)) {
            anagramsMap.set(sortedWord, anagramsMap.get(sortedWord)!.concat([word]))
        }
        else {
            anagramsMap.set(sortedWord, [word])
        }
    })

    return [...anagramsMap.values()]
};

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
