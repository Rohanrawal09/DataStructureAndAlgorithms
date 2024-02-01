/**
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
 * Specifically, ans is the concatenation of two nums arrays.
 *
 * Example 1:
 * Input: nums = [1,2,1]
 * Output: [1,2,1,1,2,1]
 * Explanation: The array ans is formed as follows:
 * - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
 * - ans = [1,2,1,1,2,1]
 */

let arr = [1,2,1];

let getConcatenatedArray = function (arr) {
    let concatenatedArray = new Array();
    let arrLength = arr.length;

    if (arr.length === 0) {
        return new Error('Array is empty 😔');
    }
    for (let [index, value] of arr.entries()) {
        concatenatedArray[index] = value;
        concatenatedArray[arrLength + index] = value;
    }
    return concatenatedArray;
}


console.log(getConcatenatedArray(arr));

