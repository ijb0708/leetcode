/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const allLen = nums1.length + nums2.length;
    let idx1 = 0;
    let idx2 = 0;

    let que = [];
    while(nums1.length > idx1 && nums2.length > idx2) {


        if(nums1[idx1] < nums2[idx2]) {
            que.push(nums1[idx1]);
            idx1++;
        }else {
            que.push(nums2[idx2]);
            idx2++;
        }
    }

    while(nums1.length > idx1) {
        que.push(nums1[idx1]);
        idx1++;
    }

    while(nums2.length > idx2) {
        que.push(nums2[idx2]);
        idx2++;
    }
    
    if(allLen % 2 == 0) {
        // console.log(que[parseIn t(allLen / 2)], " ", que[parseInt(allLen / 2) - 1])
        return (que[parseInt(allLen / 2)] + que[parseInt(allLen / 2) - 1]) / 2;
    }else {
        return que[parseInt(allLen / 2)];
    }
};