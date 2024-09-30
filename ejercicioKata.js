// Given an array of elements, return the length of the longest subarray where all its elements are distinct.
// For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest subarray of distinct elements is [5, 1, 3, 2, 4].


function longestDistinctSubarray(arr) {
    let start = 0;
    let maxLen = 0;
    let seen = {};

    for (let end = 0; end < arr.length; end++) {
        // If the element is already seen, move the start pointer
        if (seen[arr[end]] !== undefined) {
            start = Math.max(start, seen[arr[end]] + 1);
        }

        // Update the last occurrence of arr[end]
        seen[arr[end]] = end;

        // Update the maximum length of the subarray
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}


// Test the function
let arr = [5, 1, 3, 5, 2, 3, 4, 1];
console.log(longestDistinctSubarray(arr));  // Output: 5

//

//Another way to do it ======

function returnDistincElements(list) {
 let result = [];

 for (let i = 0; i < list.length; i++) {
       if (result.indexOf(list[i]) === -1) {
       result.push(list[i]);

    }
 }
    return result.length;
}

returnDistincElements([5, 1, 3, 5, 2, 3, 4, 1]);

// function longestArray(arr) {
//     let start = 0;
//     let maxLen = 0;
//     let seen = {};

//     for (let end = 0; end < arr.length; end++) {
//         if (seen[arr[end]] !== undefined) {
//         start = Math.max(start, seen[arr[end]] + 1);
//     }
//     seen[arr[end]] = end;
//     maxLen =math.max(maxLen, end - start + 1);
// }

// return maxLen;

// }


// let array = [5, 1, 3, 5, 2, 3, 4, 1];
// console.log(longestArray(arr));