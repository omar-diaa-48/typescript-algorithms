function swap(arr: number[], idx1: number, idx2: number): void {
	const temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}


function selectionSort(arr: number[]): number[] {
	let startIdx = 0;
	let endIdx = arr.length - 1;
	let minIndex = 0;
	let i = 0;

	while (startIdx < endIdx) {
		// if we found a minimum number we keep its index
		if (arr[i] < arr[minIndex]) {
			minIndex = i;
		}

		i++;

		// we reached the end of the array, we swap with the minimum we found
		if (i > endIdx) {
			swap(arr, startIdx, minIndex)
			startIdx++;
			minIndex = startIdx;
			i = startIdx;
		}
	}

	return arr;
}

console.log(selectionSort([4, 2, 8, 6, 10, 5, 14]));
console.log(selectionSort([4, 2, 8, 6, 10, 5, 14, 13, 12, 11]));