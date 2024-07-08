/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    
    const deque = [];
    for(let i=1; i<=n; i++) {
        deque.push(i);
    }

    while(deque.length > 1) {

        for(let i=0; i<k-1; i++) {
            deque.push(deque[0])
            deque.shift();
        }
        deque.shift();

    }
    // console.log(deque);
    return deque[0]
};