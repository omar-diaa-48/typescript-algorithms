function angryProfessor(k: number, a: number[]): string {
  // Write your code here
  const attendees = a.reduce((b, c) => {
    if (c <= 0) {
      return b + 1
    } else {
      return b
    }
  }, 0)

  return attendees >= k ? 'YES' : 'NO'
}

console.log(angryProfessor(3, [-1, -3, 4, 2]))
