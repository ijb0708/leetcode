/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    
    function checkTopsDomino(compareNum) {

        let swithCount = 0
        for(let i=0; i<tops.length; i++) {
            if(compareNum != tops[i]) {
                if(compareNum == bottoms[i]) {
                    swithCount++;
                }else {
                    return tops.length + 1;
                }
            }
        }

        return swithCount;
    }
    
    function checkBottomsDomino(compareNum) {

        let swithCount = 0
        for(let i=0; i<tops.length; i++) {
            if(compareNum != bottoms[i]) {
                if(compareNum == tops[i]) {
                    swithCount++;
                }else {
                    return tops.length + 1;
                }
            }
        }

        return swithCount;
    }

    // console.log( checkDomino(tops[0]) );
    // console.log( checkDomino(bottoms[0]) );
    const answer = Math.min(checkTopsDomino(tops[0])
                        , checkBottomsDomino(tops[0])
                        , checkTopsDomino(bottoms[0])
                        , checkBottomsDomino(bottoms[0])
                        );
    if(answer > bottoms.length) {
        return -1
    }
    return answer;

};