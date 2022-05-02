function viralAdvertising(n: number): number {
  // Write your code here

  let cumulative = 0
  let shared = n
  let liked = 0

  for (let i = 0; i < n; i++) {
    // only half of the shared will like
    liked = Math.floor(shared / 2)

    // add the liked portion
    cumulative += liked

    // calculate the new shared
    shared = liked * 3
  }

  return cumulative
}

console.log(viralAdvertising(5))
