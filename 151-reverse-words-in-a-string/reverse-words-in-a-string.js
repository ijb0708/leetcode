/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s
        .replace(/ +(?= )/g,'')
        .trim()
        .split(' ')
        .reverse()
        .join(' ');
};