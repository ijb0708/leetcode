/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    let sum1 = 0, sum2 = 0;
    let zero1 = 0, zero2 = 0;

    for(const n of nums1) {
        sum1 += n;
        if(n == 0) {
            sum1++;
            zero1++;
        }
    }
    for(const n of nums2) {
        sum2 += n;
        if(n == 0) {
            sum2++;
            zero2++;
        }
    }

    // console.log();
    // console.log();
    // 적은 합계를 가질경우 zero이 개수는 0이되면안됀다.
    if(zero1 == 0 && sum2 > sum1) 
        return -1;
    if(zero2 == 0 && sum1 > sum2)
        return -1;

    // 큰수가 맞춰야하는데 영의 개수만큼 1을 사용하게 되므로
    // 전체합게 + (0의 개수) * 1
    return Math.max(sum1, sum2);
};