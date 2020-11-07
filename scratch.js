var userInput = 'br'

const str = 'Brandon Phillips'
const myRegex = /^br./i

const newRegex = new RegExp('^' + userInput + '.', 'i')

// console.log(myRegex.test(str))

console.log(newRegex.test(str))