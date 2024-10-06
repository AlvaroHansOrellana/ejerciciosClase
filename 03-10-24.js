// Given a linked list and a positive integer k, rotate the list to the right by k places.
// For example, given the linked list 7 -> 7 -> 3 -> 5 and k = 2, it should become 3 -> 5 -> 7 -> 7.
// Given the linked list 1 -> 2 -> 3 -> 4 -> 5 and k = 3, it should become 3 -> 4 -> 5 -> 1 -> 2.


// function rotar(data, k) {                        KINDA OK 
//     for (let i = 0; i < k; i++);
//     const firstElement = data.shift();
//     data.push(firstElement);
// }
// return data;
// console.log(rotar([2, 3, 4, 5, 6], 7));


function rotar2(data, k) {
    // console.log(data.slice(k));
    // console.log(data);
    let result = data.slice(k); // Guardo lo que no voy a rotar
    // k=2 --> i=0,1 (hasta k-1)
    // k=3 --> i=0,1,2 (hasta k-1)
    for (let i = 0; i <= k-1; i++) {
      result.push(data[i]); // guardando los rotados
    }
    return result;
  }
  console.log("***************************");
  console.log(rotar2([7, 7, 3, 5], 2));
  console.log(rotar2([1, 2, 3, 4, 5], 3));