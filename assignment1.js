/*Create a function called get_nlargest() that takes in a list as input, 
and an optional parameter num indicating how many values to return 
but with a default value of 3. 
The function should then return the num largest values from the list. 
Apply this function to treated with num = 4 and 
untreated with the default value.
*/


treated = [18, 43, 28, 50, 16, 32, 13, 35, 38, 33, 6, 7]
untreated = [40, 54, 26, 63, 21, 37, 39, 23, 48, 58, 28, 39, 42]

const get_nlargest = (list, num = 3) => {
    let numbers = list.sort((a,b) => a-b);
   let batman = numbers.slice(list.length - num -1, list.length-1);
    console.log(batman); 

}

get_nlargest(treated, 4);
get_nlargest(untreated)