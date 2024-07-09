/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let now = 0;
    let answer = 0;
    for(let customer of customers) {
        if(customer[0] > now) {
            now = customer[0];
            console.log("1 : " + now);
        }

        now += customer[1];
        answer += now - customer[0];

        // console.log("customer: " + customer[1]);
        // console.log("now: " + now);
        // console.log("answer: " + answer);
    }
    
    return answer / customers.length;
};