/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels = 'aeiouAEIOU';
    let cnt=0;
    for(let ch=0;ch<str.length;ch++){
      if(vowels.includes(str[ch])){
        cnt++;
      }
      
    }
    return cnt;
    
}

module.exports = countVowels;
