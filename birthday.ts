function birthday(s: number[], d: number, m: number): number {
  // Write your code here
  let num = 0

  for (let i = 0; i < s.length; i++) {
    let sum = 0
    const remaining = s.slice(i)
    for (let j = 0; j <m; j++) {
      sum += remaining[j]
    }

    if (sum === d) {
      num++
    }
  }

  return num
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2))
