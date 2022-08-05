 
 var exist = function(board, word) {
    var m = board.length;
    if(m == 0) return false;
    var n = board[0].length;
    if(n == 0) return false;
    var visited = [];
    for(var i = 0; i < m; i++) {
        visited[i] = [];
        for(var j = 0; j < n; j++) {
            visited[i][j] = false;
        }
    }
    for(var i = 0; i < m; i++) {
        for(var j = 0; j < n; j++) {
            if(existHelper(board, word, 0, i, j, visited)) return true;
        }
    }
    return false;
    
};

var existHelper = function(board, word, index, i, j, visited) {
    if(index == word.length) return true;
    if(i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j] || board[i][j] != word[index]) return false;
    visited[i][j] = true;
    var res = existHelper(board, word, index + 1, i + 1, j, visited) || existHelper(board, word, index + 1, i - 1, j, visited) || existHelper(board, word, index + 1, i, j + 1, visited) || existHelper(board, word, index + 1, i, j - 1, visited);
    visited[i][j] = false;
    return res;
}