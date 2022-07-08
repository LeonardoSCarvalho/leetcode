const minCost = function (houses, cost, m, n, target) {
  let dp = new Array(m + 1).fill(Infinity).map(
    () => new Array(target + 1).fill(Infinity).map(
      () => new Array(n + 1).fill(Infinity)
    )
  );
  dp[0][0] = new Array(n + 1).fill(0);
  houses.unshift(0);
  for (let i = 1; i <= m ; i++) {
    for (let j = 1; j <= i && j <= target; j++) {
      if (houses[i]) {
        let min = Infinity;
        for (let k = 1; k <= n; k++) {
          if (k == houses[i] && min > dp[i - 1][j][k]) {
            min = dp[i - 1][j][k]
          }
          else if (k != houses[i] && min > dp[i - 1][j - 1][k]) {
            min = dp[i - 1][j - 1][k]
          }
        }
        dp[i][j][houses[i]] = min;
        continue;
      }        
      for (let k = 1; k <= n; k++) {
        let min = Infinity;
        for (let l = 1; l <= n; l++) {                 
          if (k == l && min > dp[i - 1][j][l]) {
            min = dp[i - 1][j][l]
          }
          else if (k != l && min > dp[i - 1][j - 1][l]) {
            min = dp[i - 1][j - 1][l]
          }
        }
        dp[i][j][k] = min + cost[i - 1][k - 1];
      }

    } 
  } 
  let ret = Math.min(...dp[m][target]);
  return ret == Infinity ? -1 : ret;
}
