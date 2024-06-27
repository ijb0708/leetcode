/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

let checkX;
let checkY;
let checkA;
let isFind;

var solveSudoku = function(board) {
    
    checkX = Array.from(Array(9), () => Array(10).fill(true));
    checkY = Array.from(Array(9), () => Array(10).fill(true));
    checkA = [
        [Array(10).fill(true), Array(10).fill(true), Array(10).fill(true)],
        [Array(10).fill(true), Array(10).fill(true), Array(10).fill(true)],
        [Array(10).fill(true), Array(10).fill(true), Array(10).fill(true)]
    ];
    isFind = false

    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(board[i][j] != ".") {
                let num = parseInt(board[i][j]);
                checkX[i][num] = false;
                checkY[j][num] = false;
                checkA[parseInt(i/3)][parseInt(j/3)][num] = false;
            }
        }
    }

    reqSudoku(0, board)
};

function reqSudoku(idx, board) {

    if(isFind) return;
    // console.log(board);

    if(idx == 81) {
        console.log(board);
        isFind = true;
        return;
    };

    let x = idx % 9;
    let y = parseInt(idx / 9);

    if(board[y][x] == ".") {
        for(let k = 1; k < 10; k++) {
            if(checkX[y][k] && checkY[x][k] && checkA[parseInt(y/3)][parseInt(x/3)][k]) {
                board[y][x] = k + "";

                checkX[y][k] = false;
                checkY[x][k] = false;
                checkA[parseInt(y/3)][parseInt(x/3)][k] = false;

                reqSudoku(idx+1, board);

                if(isFind)return;
                
                board[y][x] = "."; 
                checkX[y][k] = true;
                checkY[x][k] = true;
                checkA[parseInt(y/3)][parseInt(x/3)][k] = true;
            }
        }
    }else {
        reqSudoku(idx+1, board);
    }

}