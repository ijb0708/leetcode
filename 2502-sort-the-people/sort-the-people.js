/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    
    const datas = [];
    for(let i=0; i<names.length; i++) {
        datas.push({
            'name': names[i]
           ,'height': heights[i]
        });
    }
    datas.sort(function(a, b) {
        return b.height - a.height;
    });

    const answer = datas.map(function (data) {
        return data.name;
    });
    return answer;
};