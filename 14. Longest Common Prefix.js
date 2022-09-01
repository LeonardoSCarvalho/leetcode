const longestCommonPrefix = function(strs) {
  let sortedArray = strs.sort()
  let firstString = sortedArray[0]
  let lastString = sortedArray[sortedArray.length-1]
  let pointer = 0;
  let longestCP = "";
  while(pointer <= firstString.length-1){
      if(firstString[pointer] !== lastString[pointer]){
          break;
      }
      longestCP += firstString[pointer++];
  }
  return longestCP;
};