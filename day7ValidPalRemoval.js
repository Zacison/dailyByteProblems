/*
Given a string and the ability to delete at most one character, 
return whether or not it can form a palindrome. 
Note: a palindrome is a sequence of characters that reads t
he same forwards and backwards. 

Ex: Given the following strings...

"abcba", return true
"foobof", return true (remove the first 'o', the second 'o', or 'b')
"abccab", return false

*/const validPal = (string) => {

    let answer = true;

    //check if the palendrome is valid
    for(i=0; i<string.length/2; i++){
        if (string[i] != string[string.length - i -1]) {
            return false
        }
    }
//console.log(answer);
return answer;
}

//validPal("A man, a plan, a canal: Panama.")

const validPalRemoval = (string) => {
    
    //parse input without special chars
    let str = string.toLowerCase()
    str = str.split(' ').join('');
    str = str.replace(/\W/g, '');
   
    //if the string by itself is a palendrome, return true
    if(validPal(string) === true) {
        console.log('good as it is')
        return true;
    } else {
        //loop through the string, for each char, remove it and try the validPal function
        for(let i=0; i<str.length; i++) {
            let replace = str.replace(str[i], '');
            //console.log(replace)
            if(validPal(replace) === true ) {
                return true;
            }
           
        
        }
    } 
   
    return false;

    
    

}

validPalRemoval("foobof")