                //1-rasm
//1-misol
// function findNeedle(haystack, needle) {
//     return haystack.indexOf(needle);
// }
// let result = findNeedle("sadbutsad",  'needle');
// console.log(result);

//2-misol
// function generator(address) {
//      return address.split('.').join('[.]');
// }
//  let address1 = "1.1.1.1";
//  let address2 = "255.100.50.0";
//  console.log(generator(address1)); 
//  console.log(generator(address2));

//3-misol
// let array =[1, 5, 7, 11]
// function calc (array){
//     array.sort((a,b) => a-b)
//     let number =[]
//     for(let i = 0; i < array.length; i++){
//         for(let k = i + 1; k < array.length; k++ ){
//             if(array[k] - array[i] === 2){
//                 number.push([array[i],array[k]])
//             }
//         }
//     }
//     return number
// }
// let result = calc(array)
// console.log(...result);

//4-misol
// function lengthOfLastWord() {
//     return words[words.length - 1].length;
// }
// let text = "Salom hush kelibsiz";
// let words = text.trim().split(" ");
// let res = lengthOfLastWord()    
// console.log(res);

//5-misol
// function rightmostLongestWord(s) {
// let words = s.split(' ');
// let longestWord = '';
// let maxLength = 0;
// for (let i = 0; i < words.length; i++) {
//     if (words[i].length >= maxLength) {
//         longestWord = words[i];
//         maxLength = words[i].length;
//     }
// }
//     return longestWord;
// }
// console.log(rightmostLongestWord("red white blue"));
// console.log(rightmostLongestWord("red blue gold"));            
                        //2rasm
//1-misol
// function sumOfIntegersInString(s) {
//     let numbers = s.match(/\d+/g);
//     if (numbers) {
//         let sum = numbers.reduce(function(acc, curr) {
//             return acc + parseInt(curr , ); 
//         }, 0);
//         return sum; 
//     } else {
//         return 0; 
//     }
// }
// let string = "The30quick20brown10f0x1203jumps914ov3r1349the102l4zydog";
// let res = sumOfIntegersInString(string)
// console.log(res);                         
                                              
//2-misol
// function isItLetter(char) {
//     if(typeof char == "string") return true
//     else return false
//   } 
//     console.log(isItLetter("@")); 

//3-misol
// let word1 = "apple"
// let word2 = "banana"
// function anagram  (a,b){
//     if(word1.length === word2.length) 
//     return true
//     return false
// }
// let result = anagram(word1,word2)
// console.log(result);

//4-misol
// function findUniq(arr) {
//     return arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
// }
// let arr = findUniq([ 1, 1, 1, 2, 1, 1 ])
// let result = findUniq(arr)
// console.log(result);

//5-misol
// let word1 = ["ab", "c"]
// let word2 = ["a", "bc"]
// function areArraysEqual(word1, word2) {
//     return word1.join('') === word2.join('');
//   }
// let result = areArraysEqual(word1,word2)
// console.log(result);