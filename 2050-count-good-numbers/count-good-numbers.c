#define MOD 1000000007

long long divideAndConquer(long long x, long long mulNum) {
    if(x == 0)
        return 1;
    if(x == 1)
        return mulNum;
    
    long long result = 1;
    long long mul = divideAndConquer(x / 2, mulNum);
    result = (mul * mul) % MOD;
    if(x % 2 != 0)
        result *= mulNum;
    
    return result % MOD;
}

int countGoodNumbers(long long n) {

    return (divideAndConquer(n / 2, 4) * divideAndConquer((n + 1) / 2, 5)) % MOD;
}
