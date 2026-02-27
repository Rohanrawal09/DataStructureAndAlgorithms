/**
 * Given an integer array arr, find the maximum and minimum elements in the array.
 * 
 * Example 1:
 * Input: arr = [3, 5, 1, 8, -2, 7, 4]
 * Output: { min: -2, max: 8 }
 * Explanation: The minimum value in the array is -2 and the maximum value is 8.
 *
 * Example 2:
 * Input: arr = [3]
 * Output: { min: 3, max: 3 }
 * Explanation: Since there's only one element, both the minimum and maximum are 3.
 *
 * -------------------------------
 * Code Explanation:
 * 1. If the array is empty, return an error message.
 * 2. Initialize `minElement` and `maxElement` with the first element of the array.
 * 3. Loop through the rest of the array:
 *    - If the current element is smaller than `minElement`, update `minElement`.
 *    - If the current element is greater than `maxElement`, update `maxElement`.
 * 4. After the loop, return both values as an object `{ min, max }`.
 * 
 * Time Complexity: O(n) — The array is traversed only once.
 * Space Complexity: O(1) — Uses constant extra space.
 */

function findMinMaxElement(arr) {
    if (arr.length === 0) {
        return new Error('Array is empty 😔');
    }

    // Initialize min and max to the first element
    let minElement = arr[0];
    let maxElement = arr[0];

    // Traverse the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minElement) minElement = arr[i];
        if (arr[i] > maxElement) maxElement = arr[i];
    }

    // Return the result as an object
    return { min: minElement, max: maxElement };
}

// Example test cases
let arrayOne = [3, 5, 1, 8, -2, 7, 4];
let arrayTwo = [3];
let arrayThree = [5, 1];

console.log(findMinMaxElement(arrayOne));   // { min: -2, max: 8 }
console.log(findMinMaxElement(arrayTwo));   // { min: 3, max: 3 }
console.log(findMinMaxElement(arrayThree)); // { min: 1, max: 5 }
console.log(findMinMaxElement([]));         // Error: Array is empty 😔