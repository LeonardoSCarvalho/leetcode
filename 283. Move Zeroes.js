const moveZeroes = function(nums) {
  let lastZero = 0
  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== 0){
      const aux = nums[lastZero]
      nums[lastZero] = nums[i]
      nums[i] = aux
      lastZero++
    }
  }
  return nums
}

const arr = [0,5,89,0,3,0]

console.log(moveZeroes(arr))