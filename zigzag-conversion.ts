function convert(s: string, numRows: number): string {
    let letters: (number | string)[][] = [];
    let i = 0, x = 0, y = 0;
    let isVerticle = true;

    while (letters.length < s.length) {
        letters.push([x, y, s[i]])

        if (isVerticle) {
            y++;
        }
        else {
            x++;
            y--;
        }

        i++;

        if (y === 0) {
            isVerticle = true;
        }
        else if (y === numRows - 1) {
            isVerticle = false
        }
    }

    let output: string = '';

    i = 0;

    while (i < numRows) {
        const extra = letters
            .filter((letter) => letter[1] === i)
            .map((letter) => letter[2])
            .join('');

        console.log({ extra });
        output += extra;

        i++;
    }

    return output;
};

console.log(convert("AB", 1));