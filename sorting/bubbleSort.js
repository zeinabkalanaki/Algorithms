function sort (arr) {
  const resultArray = [...arr]

  for (let outer = 0; outer < resultArray.length; outer++) {
    let outerEl = resultArray[outer]

    for (let inner = outer + 1; inner < resultArray.length; inner++) {
      let innerEl = resultArray[inner]

      if (outerEl > innerEl) {
        resultArray[outer] = innerEl
        resultArray[inner] = outerEl

        outerEl = resultArray[outer]
        innerEl = resultArray[inner]
      }
    }
  }

  return resultArray
}

const sortedArray = sort([2, 10, 6, 3, 21])

console.log(sortedArray)

// /************************ */

function bubbleSort (array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }

  return array
}

bubbleSort([4, 2, 6, 5, 1, 3])
