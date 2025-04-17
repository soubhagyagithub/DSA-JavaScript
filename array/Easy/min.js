// Find the minimum element in the array. arr = [2, 4, 1, 6, 8, 9];
// 1. Using temp varaiable (one approach )
// Steps are:
// 1. Initializing the temp value to maximum value .
// 2. Take a loop and iterating each value in the array and checking the temp value with current value wheather current value is small or not than temp value .
// 3. when current value is smaller than temp value then store current value to temp and keep doing until get minimum value.and then return temp
function minElement(nums) {
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return min;
}

let arr = [3, 4, 1, 6, 8, 9];
const res = minElement(arr);
console.log(res);
