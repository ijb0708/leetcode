/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    const answer = new ListNode();
    let cur = answer;

    while(list1 && list2) {

        if(list1.val > list2.val) {
            cur.next = list2;
            list2 = list2.next;
        }else {
            cur.next = list1;
            list1 = list1.next
        }
        cur = cur.next;
    }

    if(list1) {
        cur.next = list1;
    }else {
        cur.next = list2;
    }

    return answer.next;
};