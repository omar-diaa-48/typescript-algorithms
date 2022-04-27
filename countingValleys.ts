function countingValleys(steps: number, path: string): number {
    // Write your code here
    let alt = 0;
    let valleys = 0;
    
    for(let i=0; i<steps; i++){
        alt = path[i] === 'D' ? alt - 1 : alt + 1;

		// console.log(path[i]);
		// console.log(alt);
        
        if(alt === 0 && path[i] === 'U'){
            valleys++;
        }
    }
    
    return valleys;
}

console.log(countingValleys(8, 'UDDDUDUU'));
