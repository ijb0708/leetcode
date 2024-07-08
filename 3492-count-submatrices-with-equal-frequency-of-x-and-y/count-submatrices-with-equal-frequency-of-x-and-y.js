/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function(grid) {
    
    let answer = 0;

    const gridWdith = grid[0].length;
    const gridHeight = grid.length;

    const countX = [];
    const countY = [];
    for(let i=0; i<=gridHeight; i++) {
        const temp = [];
        for(let j=0; j<=gridWdith; j++) {
            temp.push(0);
        }
        countX.push([...temp]);
        countY.push([...temp]);
    }

    for(let i=1; i<=gridHeight; i++) {
        for(let j=1; j<=gridWdith; j++) {
            if(grid[i-1][j-1] == 'X') countX[i][j] = 1;
            if(grid[i-1][j-1] == 'Y') countY[i][j] = 1;
        }
    }

    for(let i=1; i<=gridHeight; i++) {
        for(let j=1; j<=gridWdith; j++) {
            countX[i][j] += countX[i-1][j];
            countX[i][j] += countX[i][j-1];
            countX[i][j] -= countX[i-1][j-1];

            countY[i][j] += countY[i-1][j];
            countY[i][j] += countY[i][j-1];
            countY[i][j] -= countY[i-1][j-1];
        }
    }

    for(let i=1; i<=gridHeight; i++) {
        for(let j=1; j<=gridWdith; j++) {
            if(countX[i][j] != 0 && countY[i][j] != 0)
                if(countX[i][j] == countY[i][j]) answer++;
        }
    }

    // let printX = "";
    // let printY = "";
    // for(let i=0; i<=gridHeight; i++) {
    //     for(let j=0; j<=gridWdith; j++) {
    //         printX += countX[i][j] + "";
    //         printY += countY[i][j] + "";
    //     }
    //     printX += "\n";
    //     printY += "\n";
    // }

    // console.log(printX);
    // console.log("--------------------------\n")
    // console.log(printY);

    return answer;
};