// A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.
// For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return false.

function problemaArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] ===i) {
            return i;
        }
    } return false;
}

    console.log(problemaArray([-6, 0, 2, 40]));
    console.log(problemaArray([1, 5, 7, 8]));


function isFixed(array) {
        let fixedPoint = [];
        for (let i = 0; i <= array.length; i++) {
           array[i] === i ? fixedPoint.push(i) : "";
        }
        return fixedPoint.length > 0 ? fixedPoint : false;
    }
    
    console.log(isFixed([2]));
}

// let = myArray[-6, 0, 2, 40] = {
//     if myArray: 2 == true;

// }
// }


// function myArray(if (condition) {
//     let index = 0; index < array.length; index++)
// } {
//     const element = array[index];
//     array.forEach(element => {


//         function myArray(array) {
//             let index = 0; index < array.length; index++; 

              
//         }
//     if myArray : true, === 
// }
