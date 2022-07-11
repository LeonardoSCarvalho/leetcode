const lengthOfLongestSubstring = function (s) {
  const map = new Map()
  let left = 0
  let right = 0
  let maxSize = 0
  while (right < s.length) {
    if (!map.has(s[right])) {
      map.set(s[right], 1)
      right++
      maxSize = Math.max(map.size, maxSize)
    } else {
      map.delete(s[left++])
    }
  }
  return maxSize
};