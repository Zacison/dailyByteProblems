/**
 * This question is asked by Facebook. 
 * Given a string, return whether or not it forms a palindrome 
 * ignoring case and non-alphabetical characters. 
Note: a palindrome is a sequence of characters that 
reads the same forwards and backwards. 

Ex: Given the following strings...

"level", return true
"algorithm", return false
"A man, a plan, a canal: Panama.", return true
 */

const validPal = (string) => {
    //parsing for correct input without special chars

    let str = string.toLowerCase()
    str = str.split(' ').join('');
    str = str.replace(/\W/g, '')
    let answer = true;

    //check if the palendrome is valid
    for(i=0; i<str.length/2; i++){
        if (str[i] != str[str.length - i -1]) {
            return false
        }
    }
console.log(answer);
return answer;
}

validPal("A man, a plan, a canal: Panama.")