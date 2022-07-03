let search = function(nums, target) {
  let left = 0
  let right = nums.length -1
   do {
    const middle = parseInt((right + left) / 2)
    if(nums[middle] == target) return middle
    if(target > nums[middle]) {left = middle + 1}
    else {right = middle - 1}
   } while(left <= right)
   return -1
}

const arr = [1,2,3,4,5,6,7,8,9,10]
const target = 8

console.log(search(arr,target))