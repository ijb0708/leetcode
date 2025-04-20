/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    const counts = {};
    for(const answer of answers) {
        if(!counts[answer]) {
            counts[answer] = 0;
        }
        counts[answer]++;
    }
    let total = 0;
    for(const cnt in counts) {
        const groupSize = parseInt(cnt) + 1;
        const numberOfSameAnswer = counts[cnt];
        // console.log(groupSize, " - - ", numberOfSameAnswer);
        const groupCount = Math.ceil(numberOfSameAnswer / groupSize);
        // console.log(groupCount);
        total += groupCount * groupSize;
    }
    // console.log(total);
    return total;
};