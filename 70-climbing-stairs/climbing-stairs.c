
int climbStairs(int n) {
    
    int cash[46];
    cash[1] = 1;
    cash[2] = 2;

    for(int i = 3; i <= n; i++) {
        cash[i] = cash[i-1] + cash[i-2];
    }

    return cash[n];
}