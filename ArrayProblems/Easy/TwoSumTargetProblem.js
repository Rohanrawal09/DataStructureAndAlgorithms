/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

let numsArray = [2,7,11,15,88,21,0,6];
let targetValue = 88;

let getTwoSumFforTarget = function(numsArray, targetValue) {
    let storageObject = new Object();
    if (numsArray.length === 0) {
        return new Error('Array is empty 😔');
    }
    for (let [ index, value ] of numsArray.entries()) {
        let diffferenceNumber = Math.abs(value - targetValue);
        if (index > 0 && storageObject.hasOwnProperty(value)) {
            return [storageObject[value], index]
        } else {
            storageObject[diffferenceNumber] = index;
        }
    }
}

console.log(getTwoSumFforTarget(numsArray,targetValue));