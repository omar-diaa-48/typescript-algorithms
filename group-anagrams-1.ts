function isAnagrams(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) {
        return false;
    }

    const str2Letters = str2.split('');

    let isAnagrams = true;

    str2Letters.forEach((str2Letter) => {
        if (!str1.includes(str2Letter)) {
            isAnagrams = false;
        }
    })

    return isAnagrams;
}

function groupAnagrams(strs: string[]): string[][] {
    const output: string[][] = [];

    let i = 0;
    let j = 0;

    const pickedWords = new Map();

    while (i < strs.length - 1) {
        j = i + 1;

        const word = strs[i];
        output.push([word])

        if (!pickedWords.has(word)) {
            pickedWords.set(word, word)
        }


        while (j < strs.length) {
            if (isAnagrams(word, strs[j])) {
                if (!pickedWords.has(strs[j])) {
                    output[i].push(strs[j]);
                    pickedWords.set(strs[j], strs[j])
                }
            }

            j++;
        }

        i++;
    }

    return output;
};

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
