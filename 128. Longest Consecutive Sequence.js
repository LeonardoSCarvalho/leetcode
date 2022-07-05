const longestConsecutive = function (nums) {
  const arr = nums.sort((a, b) => a - b)
  let aux = 0
  let count = 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) continue
    if (arr[i] - arr[i + 1] == -1) count += 1
    else {
      aux = aux < count ? count : aux
      count = 1
    }
  }
  return aux
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))

