function fact(number) {
    let result = 1
  
    for (i = 2; i <= number; i++) {
      result = result * i
    }
  
    return result
  }
  
  console.log(fact(3))
  console.log(fact(4))
  console.log(fact(5))
  
  ///************************ */
  
  function factotial(number) {
    if(n === 1 ) return 1
    return n * factotial(n-1)
  }
  
  console.log(factotial(3))
  console.log(factotial(4))
  console.log(factotial(5))