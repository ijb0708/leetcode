/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
var idealArrays = function(n, maxValue) {
    
    const MOD = 1e9 + 7;
    const MAX_N = 10010;
    const MAX_P = 30;

    const sieve = Array.from({length:MAX_N}, (v, i)=>i);
    for(let i=2; i*i<MAX_N; i++) {
        if(sieve[i] == i) {
            for(let j=i*i; j<MAX_N; j+=i) {
                if(sieve[j] == j)
                    sieve[j] = i;
            }
        }
    }
    
    // console.log(sieve);
    const combTable = new Array(MAX_N + MAX_P);
    for (let i = 0; i < combTable.length; i++) {
        combTable[i] = new Array(MAX_P + 1).fill(0);
    }
    combTable[0][0] = 1;
    for(let i = 1; i < MAX_N + MAX_P; i++) {
        combTable[i][0] = 1;
        for(let j = 1; j <= Math.min(i, MAX_P); j++) {
            combTable[i][j] = (combTable[i - 1][j] + combTable[i - 1][j - 1]) % MOD;
        }
    }
    // console.log(combTable[1000][4]);

    let answer = 0n;
    let res = 1n;
    let x;
    for(let i = 1; i <= maxValue; i++) {
        res = 1n;
        x = i;
        while(x > 1) {
            let p = sieve[x];
            let e = 0;
            while(x % p == 0) {
                // console.log(p);
                x /= p;
                e++;
            }
            res = (res * BigInt(combTable[n + e - 1][e])) % BigInt(MOD);
        }
        answer = (answer + res) % BigInt(MOD);
    }

    // let x = 2900;
    // let res = 1;
    // while(x > 1) {
    //     let p = sieve[x];
    //     let e = 0;
    //     while(x % p == 0) {
    //         console.log(p);
    //         x /= p;
    //         e++;
    //     }
    //     res = (res * combTable[n + e - 1][e]) % MOD;
    //     console.log(res % MOD);
    // }

    return Number(answer);
};