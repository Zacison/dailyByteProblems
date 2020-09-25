//return whether or not 2 number sum to a given target K
//You may not sum a number with itself

const twoSum = (list, target) => {
    for (let i = 0; i < list.length; i++) {    
        for (let j = (i+1); j < list.length; j++) {
            if ((list[i] + list[j]) == target) {
                console.log(`Match ${list[i]} & ${list[j]}`);
                return true
            }     
        }
    }
    return false;
}


const twoSumHash = (list, target) => {
    let nums = [];
    for (let i = 0; i < list.length; i++) {
        let difference = target - list[i];
        console.log(difference)
        if (nums.includes(difference)) {
            return true;
        } else {
            nums.push(list[i]);
        }
    }
    console.log(nums)
    return false;
}

//typing again for memory
const twoSumArray = (numList, target) => {
    let diffList = [];
    for (let i = 0; i < numList.length; i++) {
        let diff = target - numList[i];
        if(diffList.includes(diff)) {
            return true;
        } else {
            diffList.push(numList[i])
        }
        
    }

    return false
}

//twoSumHash([1,3,8,2], 10)
//twoSum([3,9,13,7], 8)
twoSumHash([4,2,6,5,2], k=4)