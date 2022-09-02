const findSum = (arr, target, res, currComb, currIndex) => {
  if (target === 0) {
      res.push([...currComb]);
      return;
  }
  
  if (arr[0] > target) {
      return;
  }
  
  for (let i = currIndex; i < arr.length; i++) {
      let newTarget = target - arr[i];
      if (newTarget < 0) {
          return;
      }
      currComb.push(arr[i]);
      findSum(arr, newTarget, res, currComb, i);
      currComb.pop();
  }
  return;
}

const combinationSum = function(arr, target) {
  let res = [];
  let currComb = [];

  arr.sort((a, b) => a - b);

  findSum(arr, target, res, currComb, 0);
  
  return res;
};