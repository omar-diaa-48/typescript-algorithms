function bonAppetit(bill: number[], k: number, b: number): void {
  // Write your code here
  const fairlyCost = (bill.reduce((sum, cost) => sum + cost, 0) - bill[k]) / 2
  console.log(fairlyCost < b ? b - fairlyCost : 'Bon Appetit')
}

bonAppetit([2, 4, 6], 2, 3)
