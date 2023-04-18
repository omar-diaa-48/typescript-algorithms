function letterCombinations(digits: string): string[] {
    const output: string[] = [];

    if (!digits) {
        return output;
    }

    const NUMBERS_MAP = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    function addNumberCharacters(i: number, out: string, result: string[]) {
        if (digits.length === i) {
            result.push(out);
            return;
        }

        for (let char of NUMBERS_MAP[digits[i] as keyof typeof NUMBERS_MAP]) {
            addNumberCharacters(i + 1, out + char, result)
        }
    }

    addNumberCharacters(0, '', output)

    return output;
};

console.log(letterCombinations("23"))