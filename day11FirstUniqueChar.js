/**
 * Given a string, return the index of its first unique character. If a unique character does not exist, return -1.

Ex: Given the following strings...

"abcabd", return 2
"thedailybyte", return 1
"developer", return 0
 */

const uniqueChar = (str) => {
    let strArray = {};
    for (let i = 0; i < str.length; i++) {
        //if the char isn't in the object, add it & set the char count to 1
        if(!strArray[str[i]]) {
            strArray[str[i]] = 1;
            //if it is, increment the count
        } else {
            strArray[str[i]] = strArray[str[i]] + 1;
        }
    }

    console.log(strArray)

    for (let i = 0; i < str.length; i++) {
        //compare the char to the number in object, return first one that is 1
        if(strArray[str[i]] == 1) {
            return i;
        }
        
    }
   

    return -1;

   
}

uniqueChar("developer")