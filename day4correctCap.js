/**
 * This question is asked by Google. 
 * Given a string, return whether or not it uses capitalization correctly.
 * A string correctly uses capitalization if all letters are capitalized, 
 * no letters are capitalized, or only the first letter is capitalized.

Ex: Given the following strings...

"USA", return true
"Calvin", return true
"compUter", return false
"coding", return true
 */


//my solution
 const correctCap = (string) => {   
     //if all chars are uppercase or lowercase
     //USA or coding   
     if(string === string.toUpperCase() || string === string.toLowerCase()) {
        return true;
    } 

    //first letter is upper OR lowercase, rest of the word must be lowercase
    for(let i=1; i<string.length; i++) {
        if(string[0].toUpperCase() === string[0] || string[0].toLowerCase() === string[0]) {
            if(string[i] !== string[i].toLowerCase()) {
                return false;
            }
        } 
    }

    return true;
     
 }

 //Official solution
 const correctCap2 = (string) => {
     let count = 0;
     for (let i = 0; i < string.length; i++) {
         if(string[i] === string[i].toUpperCase()) {
             count++;
         }
         
     }

     return (count == string.length ||
        count == 0 ||
        count == 1 && string[0] === string[0].toUpperCase()) 
            
 }



 correctCap("ZacH");