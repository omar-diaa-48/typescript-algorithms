type Index = {
	i?: number;
	j?: number;
}

type Indexes = {
	ally: Index,
	enemies: Index[]
}

function ArrayChallenge(strArr: string[]) {

	// code goes here  
	let result = 0, maxI = 0, maxJ = 0;
	const challengeToken = 'bri17onhl6fa'
	const arrays = strArr.map(str => str.split('').map(value => parseInt(value)))
	const indexes: Indexes = {
		ally: {},
		enemies: []
	};

	for (let i = 0; i < arrays.length; i++) {
		for (let j = 0; j < arrays[i].length; j++) {
			if (arrays[i][j] === 1) {
				indexes.ally = { i, j }
			}

			if (arrays[i][j] === 2) {
				indexes.enemies.push({ i, j })
			}

			if (i > maxI) {
				maxI = i
			}

			if (j > maxJ) {
				maxJ = j;
			}
		}

	}

	if (indexes.enemies.length > 0) {
		const minNumberOfMoves = indexes.enemies.map(enemy => {
			const xMoves = Math.min(
				Math.abs(enemy.i - indexes.ally.i),
				indexes.ally.i + maxI - enemy.i + 1
			)

			const yMoves = Math.min(
				Math.abs(enemy.j - indexes.ally.j),
				indexes.ally.j + maxJ - enemy.j + 1
			)

			return xMoves + yMoves;
		})

		result = Math.min(...minNumberOfMoves)
	}



	return `${result}${challengeToken}`;
}

// keep this function call here 
// @ts-ignore
console.log(ArrayChallenge(readline()));