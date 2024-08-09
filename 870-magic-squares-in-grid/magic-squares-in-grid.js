/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {

    function isMagicSquare(x, y) {

        const dupilCation = new Array(10).fill(false);

        for(let i=0; i<3; i++) {
            for(let j=0; j<3; j++) {
                const num = grid[y + i][x + j];
                if(num < 1 || 9 < num)
                    return false;
                if(dupilCation[num])
                    return false;
                dupilCation[num] = true;
            }
        }

        let diagonal1 = grid[y][x] + grid[y + 1][x + 1] + grid[y + 2][x + 2];
        let diagonal2 = grid[y + 2][x] + grid[y + 1][x + 1] + grid[y][x + 2];
        if (diagonal1 != diagonal2) return false;

        for(let i=0; i<3; i++) {
            let sum = 0;
            for(let j=0; j<3; j++) {
                sum += grid[y+i][x+j];
            }
            if(diagonal1 != sum)
                return false;
        }

        for(let i=0; i<3; i++) {
            let sum = 0;
            for(let j=0; j<3; j++) {
                sum += grid[y+j][x+i];
            }
            if(diagonal1 != sum)
                return false;
        }

        return true;
    }

    
    const gridWidth = grid[0].length;
    const gridHeight = grid.length;

    let answer = 0; 
    for(let i=0; i+2 < gridHeight; i++) {
        for(let j=0; j+2 < gridWidth; j++) {
            if(isMagicSquare(j, i)) answer++;
        }
    }

    return answer;
};