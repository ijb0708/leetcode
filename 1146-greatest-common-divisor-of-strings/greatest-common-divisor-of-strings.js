/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
    if(str1 + str2 != str2 + str1)
        return "";
    
    function gcd(a, b) {
        if(b==0) return a
        return gcd(b, a%b);
    }
    // console.log(gcd(10, 5))
    const gcdLen = gcd(str1.length, str2.length)
    return str1.substr(0, gcdLen);
};