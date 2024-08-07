/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    const ones = [ "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen" ];
    const tens = [ "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety" ];
    const thousands = [ "", "Thousand", "Million", "Billion" ];

    let answer = "";
    let idx = 0;

    if(num == 0)
        return "Zero";

    while(num > 0) {
        if(num % 1000 != 0) {
            let str = "";
            let part = num % 1000;

            if(part >= 100) {
                str = ones[parseInt(part / 100)] + " Hundred ";
                part %= 100;
            }

            if(part >= 20) {
                str += tens[parseInt(part / 10)] + " ";
                part %= 10;
            }

            if(part > 0) {
                str += ones[part] + " ";
            }

            str += thousands[idx] + " ";

            // answer += str;
            answer = str + answer;
        }

        num = parseInt(num / 1000);
        idx++;

        // console.log(answer, num);
    }

    let findIdx = 0;
    for(let i=answer.length-1; i >= 0; i--) {
        if(answer[i] != " ") {
            findIdx = i;
            break;
        }
    }

    // return answer;
    return answer.substr(0, findIdx+1);
};
