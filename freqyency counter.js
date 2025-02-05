/*function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    //o(1)
    return false;
  }

  let sqrArr2 = arr2.map((num) => Math.sqrt(num)); //o(n)  spacecomplexity o(1)

  for (let i = 0; i < arr1.length; i++) {
    //o(n)
    if (!sqrArr2.includes(arr1[i])) {
      //o(n)
      return false;
    }
  }
  return true;
}

arr1 = [1, 2, 3];
arr2 = [1, 4];

console.log(same(arr1, arr2));
//overall time complexity o(n) space complexity o(1)
*/
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCount1 = {};
  let frequencyCount2 = {};
  for (let val of arr1) {
    frequencyCount1[val] = (frequencyCount1[val] || 0) + 1; //{1:1,2:1,3:1}
  }
  for (let val of arr2) {
    frequencyCount2[val] = (frequencyCount2[val] || 0) + 1; //{1:1,4:1}
  }
  for (let key in frequencyCount1) {
    //(1)
    if (!(key ** 2 in frequencyCount2)) {
      return false;
    }
    if (frequencyCount2[key ** 2] !== frequencyCount1[key]) {
      return false;
    }
  }

  return true;
}

arr1 = [1, 2, 3, 3, 3];
arr2 = [1, 4, 8, 9, 9];

console.log(same(arr1, arr2));
