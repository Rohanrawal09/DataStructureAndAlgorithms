
/**
 * Performs a QuickSort on the provided array using the last element as the pivot.
 *
 * This implementation:
 * - Chooses the last element of the input array as the pivot.
 * - Partitions the array into two new arrays: `left` (elements < pivot) and `right` (elements >= pivot).
 * - Recursively sorts `left` and `right`, then returns a new array composed of [...sortedLeft, pivot, ...sortedRight].
 * - Does not mutate the input array (creates and returns a new sorted array).
 *
 * Important notes:
 * - Elements are compared using the native `<` operator; ensure elements are comparable (e.g., numbers or comparable objects).
 * - This implementation is not in-place and is not guaranteed to be stable.
 * - Time complexity: average O(n log n), worst-case O(n^2) (e.g., already sorted input with this pivot choice).
 * - Space complexity: O(n) additional space due to partition arrays and recursion; call stack can be O(n) in the worst case.
 *
 * @template T
 * @param {T[]} arr - The array of comparable items to sort.
 * @returns {T[]} A new array containing the elements of `arr` in ascending order.
 *
 * @example
 * // returns [1, 1, 2, 3, 6, 8, 10]
 * quickSort([3, 6, 8, 10, 1, 2, 1]);
 */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}
const arrayList = [3, 6, 8, 10, 1, 2, 1];
console.log(`Array Before Sorting: ${arrayList} 😠`);
console.log(`Array after sort ${quickSort(arrayList)} ❤️`);