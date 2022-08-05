 
 var exist = function(board, word) {
    var m = board.length;
    var n = board[0].length;
    var visited = new Array(m);
    for (var i = 0; i < m; i++) {
        visited[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            visited[i][j] = false;
        }
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (existHelper(board, word, 0, i, j, visited)) {
                return true;
            }
        }
    }
    return false;
    
};