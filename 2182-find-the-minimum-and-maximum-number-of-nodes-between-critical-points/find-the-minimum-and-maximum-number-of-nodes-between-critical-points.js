/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    
    let preVal = -1;
    let nextVal;
    let idx = 0;
    let startCp = -1;
    let currCp = -1;
    let iter = head;
    let minDist = -1;
    let maxDist = -1;

    while(iter) {

        if(preVal != -1) {
            if(iter.val < preVal
                &&iter.next != null 
                    &&iter.val < iter.next.val
                        ||iter.val > preVal
                            && iter.next != null 
                                && iter.val > iter.next.val) {

                // console.log(idx);

                // console.log(idx, " - ", currCp, " = ", idx - currCp);
                if(currCp != -1) {
                    if(minDist == -1) {
                        minDist = idx - currCp;
                    }else {
                        minDist = Math.min(idx - currCp, minDist);
                    }
                }
                
                currCp = idx;
                if(startCp == -1) {
                    startCp = idx;
                }

            }
        }
        preVal = iter.val;
        iter = iter.next;
        idx++;
    }

    if(startCp != -1 && currCp != startCp) {
        maxDist = currCp - startCp;
    }

    // console.log(maxDist, minDist);
    return [minDist, maxDist];
    // console.log(startCp);
};