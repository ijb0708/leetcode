/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var countGoodIntegers = function(n, k) {
    const dict = new Set();
    const base = Math.pow(10, Math.floor((n - 1) / 2));
    const skip = n & 1;
    // console.log(skip);
    let str = "";
    for (let i=base; i<base*10; i++) {
        let s = i.toString();
        s += s.split("").reverse().slice(skip).join("");
        const palindromicInteger = parseInt(s);
        // console.log(s)
        if(palindromicInteger % k === 0) {
            const sortedStr = s.split("").sort().join("");
            dict.add(sortedStr);
        }
    }

    // console.log(dict);

    const factorial = Array(n + 1).fill(1n);
    for (let i=1; i<=n; i++) {
        factorial[i] = factorial[i - 1] * BigInt(i);
    }
    // console.log(factorial);

    let answer = 0n;
    for(const str of dict) {
        const cnt = Array(10).fill(0);
        for(const c of str) {
            cnt[parseInt(c)]++;
        }

        let tot = BigInt(n - cnt[0]) * factorial[n - 1];
        for(const x of cnt) {
            tot /= factorial[x];
        }
        answer += tot;
    }
    // console.log(answer);
    return Number(answer)
};