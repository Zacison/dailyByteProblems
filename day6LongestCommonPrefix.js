/**
 * Given an array of strings, return the longest 
 * common prefix that is shared amongst all strings. 
Note: you may assume all strings only contain lowercase alphabetical characters. 

Ex: Given the following arrays...

["colorado", "color", "cold"], return "col"
["a", "b", "c"], return ""
["spot", "spotty", "spotted"], return "spot"
 */

 //reducer for DRY code
 const quickReduce = (array) => {
     return (array.reduce((previous, current) => {
        if(current.length < previous.length) {
            return current;
        } else {
            return previous
        }
    }));
 }

const loCoPrefix = (array) => {
  
    let shortestWord = quickReduce(array);
   
    //array container for all word comparisons
    let newHolder = [];

    //loop through each word
    for (let i=0; i<array.length-1; i++) {
        let charHolder = [];

        //loop through each character in a word
        for (let char = 0; char < shortestWord.length; char++) {
            
            //if the char matches the char in the next word
            if(array[i][char] == array[i+1][char]) {
                //console.log(array[i][char])
                if(!charHolder[array[i][char]]) {
                charHolder.push(array[i][char]);
                }
            
            }
            
        }
        charHolder = charHolder.join('');
        if(!newHolder[charHolder]) {
            newHolder.push(charHolder);
        }
        
    }
    console.log(newHolder);
    return(quickReduce(newHolder))
}

loCoPrefix(["colorado", "color", "cold"])