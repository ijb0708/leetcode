/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    
    // const answer = new ListNode(0, null);
    // let answerIter = answer;

    const answer = new ListNode(0);
    let ansIter = answer;
    let acc = 0;
    let iter = head.next;
    while(iter != null) {

        // console.log(iter.val)
        // console.log(iter.val)
        if(iter.val == 0) {
            ansIter.next = new ListNode(acc);
            ansIter = ansIter.next;
            acc = 0;
            // answerIter.next = new ListNode(acc, null)
            // answerIter = answerIter.next;
        }else {
            acc += iter.val;
        }

        iter = iter.next;
    }

    // console.log(answer);
    return answer.next;
};