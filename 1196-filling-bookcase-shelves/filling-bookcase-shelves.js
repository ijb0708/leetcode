/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
    
    const cache = new  Array(books.length+1).fill(-1);
    cache[0] = 0;
    cache[1] = books[0][1];

    for(let i=2; i<=books.length; i++) {
        // const [bookWidth, bookHeight] = books[i-1];
        let remainWidth = shelfWidth - books[i-1][0];
        let maxHeight = books[i-1][1];
        cache[i] = cache[i-1] + books[i-1][1];

        let j = i - 1;
        while(j>0 && remainWidth-books[j-1][0] >= 0) {
            maxHeight = Math.max(maxHeight, books[j-1][1]);
            remainWidth -= books[j-1][0];
            cache[i] = Math.min(cache[i], cache[j-1] + maxHeight)
            j--;
        }
    }

    return cache[books.length];
};