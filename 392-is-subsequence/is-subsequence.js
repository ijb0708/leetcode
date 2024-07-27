/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let idx = 0;
    for(let i=0; i<t.length && idx<s.length; i++) {
        if(s[idx] == t[i]) {
            idx++;
        }
    }

    if(idx == s.length)
        return true;
    else
        return false;
};