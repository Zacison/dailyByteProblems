/* Given a string representing your stones and another string representing a list of jewels,
 return the number of stones that you have that are also jewels.

    Ex: Given the following jewels and stones...

jewels = "abc", stones = "ac", return 2
jewels = "Af", stones = "AaaddfFf", return 3
jewels = "AYOPD", stones = "ayopd", return 0

*/

const jewelStone = (jewels, stones) => {
    jewels = jewels.split('');
    stones = stones.split('');

    let counter = 0;

    for (let i = 0; i < stones.length; i++) {
        //includes is case sensitive, so it works
        if (jewels.includes(stones[i])) {
            counter++;
        } 
    }
    return counter;
}

jewelStone('Af', 'AaaddfFf')