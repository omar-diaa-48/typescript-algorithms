function beautifulDays(i: number, j: number, k: number): number {
  // Write your code here
  const nums = Array.from({ length: j - i + 1 }, (v, k) => k + i)

  return nums.filter((num) => {
    const difference = Math.abs(num - parseInt(num.toString().split('').reverse().join('')))

    return difference % k === 0

  }).length
}

console.log(beautifulDays(20, 23, 6))
