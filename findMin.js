function findMin(numbers) {
    let currentMin = numbers[0]
  
    for (const item of numbers) {
      if (item < currentMin) {
        currentMin = item
      }
    }
  
    return currentMin
  }
  
  console.log(findMin([1, 2, 3]))
  console.log(findMin([9, 8, 3, 5, 1]))
  