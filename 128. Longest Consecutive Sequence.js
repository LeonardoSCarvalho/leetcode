const longestConsecutive = function (nums) {
  const arr = nums.sort((a, b) => a - b)
  let aux = 0
  let cont = 1
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i]   === 1) {
      cont += 1
      console.log(cont)
    } else {
      aux = aux < cont ? cont : aux
      cont = 1
    }
  }
  
  return aux
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))

