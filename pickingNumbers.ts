function pickingNumbers(a: number[]) {
  let biggest = 0
  a.forEach((elem) => {
    const subarray = a.filter(
      (subElem) => elem - subElem === 0 || elem - subElem === 1,
    )
    if (subarray.length > biggest) biggest = subarray.length
  })
  return biggest
}

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]))
