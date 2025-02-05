function validAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    // //timecomplexity o(1)
    return false;
  }
  let obj1 = {}; // //spacecomplexity o(n)
  let obj2 = {}; ////spacecomplexity o(n)
  for (val of arr1) {
    //timecomplexity o(n)
    obj1[val] = (obj1[val] || 0) + 1; ////spacecomplexity o(n)
  }
  for (val of arr2) {
    //timecomplexity o(n)
    obj2[val] = (obj2[val] || 0) + 1; //spacecomplexity o(n)
  }
  for (key in obj1) {
    //timecomplexity o(n)
    if (!(key in obj2)) {
      //timecomplexity o(1)
      return false;
    }
    if (obj2[key] !== obj1[key]) {
      //timecomplexity o(1)
      return false;
    }
  }
  return true;
}
arr1 = "a";
arr2 = "a";

console.log(validAnagram(arr1, arr2));

//overall timecomplexity o(n)
//overall spacecomplexity o(n)
