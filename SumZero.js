//brute force
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    //timecomplexity o(n2)
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        //timecomplexity o(1)
        return [arr[i], arr[j]];
      }
    }
  }
}
arr = [-2, -3, -4, 1, 2, 5, 8];

console.log("2nd function", sumZero1(arr));

//overall timecomplexity o(n2) //overall spacecomplexity o(1)

//two pointer
function sumZero(arr) {
  let left = 0; //spacecomplexity o(1)
  let right = arr.length - 1; //spacecomplexity o(1)
  while (left < right) {
    //timecomplexity o(n)
    let sum = arr[left] + arr[right]; //spacecomplexity o(1)
    if (sum === 0) {
      //timecomplexity o(1)
      return [[arr[left], arr[right]]];
    } else if (sum > 0) {
      //timecomplexity o(1)
      right--;
    } else {
      //timecomplexity o(1)
      left++;
    }
  }
}

arr = [-2, -3, -4, 1, 5, 5, 8];

console.log(sumZero(arr));

//overall timecomplexity o(n) //overall spacecomplexity o(1)
