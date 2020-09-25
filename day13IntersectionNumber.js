/*
Given two integer arrays, return their intersection. 
Note: the intersection is the set of elements that are common to both arrays. 

Ex: Given the following arrays...

nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []
*/


//Brute force solution, the .includes takes a lot of time oN^2
const numIntersect = (nums1, nums2) => {
    let commonNums = [];
    for(let i=0; i<nums1.length; i++) {
        if((nums2.includes(nums1[i])) && (!commonNums.includes(nums1[i]))) {
            commonNums.push(nums1[i])
        }
    }
    //console.log(commonNums)
    return commonNums;
}

//by putting it into a hash set, the lookup is easier 
const numIntersect2 = (nums1, nums2) => {

    //Put the first list into an object, faster lookup times
    let num1Set = {};
    for (let i = 0; i < nums1.length; i++) {
        num1Set[nums1[i]] = true;   
    }

    //compare values in nums2 to the num1set, add to the results array
    let commonNums = [];
    for(let i=0; i<nums2.length; i++) {
        //check vals in num1set AND that commonNums doesn't already have the value
        if((num1Set[nums2[i]] == true) && (!commonNums.includes(nums2[i]))) {
            commonNums.push(nums2[i])
        }
    }
    return commonNums;
    
}


numIntersect2([2,4,4,2,3,7], [2,7,3,4])