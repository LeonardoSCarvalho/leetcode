const candy = function (ratings) {
  let candy = [1];
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] <= ratings[i - 1]) candy[i] = 1;
    else candy[i] = candy[i - 1] + 1;
  }
  for (let j = ratings.length - 2; j >= 0; j--) {
    if (ratings[j] > ratings[j + 1] && candy[j] <= candy[j + 1]) {
      candy[j] = candy[j + 1] + 1;
    }
  }
  const result = candy.reduce((acc, item) => acc + item);
  return result
};