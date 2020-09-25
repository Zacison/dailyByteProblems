/**
 * Given a string representing the sequence of 
 * moves a robot vacuum makes, r
 * eturn whether or not it will return to its original position. 
 * The string will only contain L, R, U, and D characters, 
 * representing left, right, up, and down respectively.

Ex: Given the following strings...

"LR", return true
"URURD", return false
"RUULLDRD", return true
 */

//solution 1

const vacuumRoute = (string) => {
    let moves = string.split('');
    //console.log(moves)
    let temp = { L: 0, R: 0, U: 0, D: 0 }
    
    //count the number of moves in each direction
    for (let char of moves) {
        if(char) {
            temp[char] += 1;
        }  
    }
    console.log(moves, temp)

    //check if it ends up in the same direction
    if (temp['L'] == temp['R']) {
        if (temp['U'] == temp['D']) {
            return true;
        }
    }

    return false;
    
}

let checkOriginPosition = vacuumRoute("RUULLDRD")
console.log(checkOriginPosition);


/*
const vacuumReturnsToStart = (moves) => {
    let UD = 0;
    let LR = 0;
    for(let i = 0; i < moves.length; i++) {
        //console.log(UD, LR)
        let current = moves.charAt(i);
        if(current == 'U') {
            UD++;
        } else if(current == 'D') {
            UD--;
        } else if(current == 'L') {
            LR++;
        } else if(current == 'R') {
            LR--;
        }
    }

    if(UD === 0 && LR === 0) {
        return true;
    } 
    else {
        return false
    }
    
}

let batman = vacuumReturnsToStart('RUULLDRD');
console.log(batman);
*/
