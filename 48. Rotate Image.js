var rotate = function(matrix) {
  const n = matrix.length;

function transpose() {
  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
      const temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
}

function rotate() {
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n / 2; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }
}

transpose(matrix);
rotate(matrix);
};