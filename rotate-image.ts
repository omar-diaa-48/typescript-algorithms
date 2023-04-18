function rotate(matrix: number[][]): number[][] {
    const TRANSFORMATION_LENGTH = matrix.length;

    for (let i = 0; i < TRANSFORMATION_LENGTH; i++) {
        for (let j = i; j < TRANSFORMATION_LENGTH; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    matrix.forEach((row) => row.reverse())

    return matrix;
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
