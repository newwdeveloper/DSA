/*function countString(str) {
  let box = {};
  for (let char of str.toLowerCase()) {
    //O(n)
    box[char] = (box[char] || 0) + 1; //O(n) O(1)
  }
  return box;
}

console.log(countString("heLLo"));

Find all triplets (one element from each array) where the difference between the largest and smallest elements is less than a given value.
Inputs
Three arrays.
A difference d
 
For Example
Input

1 3 5
2 4 6
0 7 8
3
Output

[ [ 1, 2, 0 ], [ 5, 6, 7 ] ]*/

function triplate(arr1, arr2, arr3, g) {
  const result = []; //o(n)
  for (let i = 0; i < arr1.length; i++) {
    //o(n3)
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        let max = Math.max(arr1[i], arr2[j], arr3[k]); //o(1)
        let min = Math.min(arr1[i], arr2[j], arr3[k]); //o(1)
        let diff = max - min;
        if (diff < g) {
          //o(1)
          result.push([arr1[i], arr2[j], arr3[k]]);
        }
      }
    }
  }
  return result;
}
arr1 = [1, 3, 5];
arr2 = [2, 4, 6];
arr3 = [0, 7, 8];
g = 3;

console.log(triplate(arr1, arr2, arr3, g));
