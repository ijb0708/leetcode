/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    
    const cache = Array.from({length:days.length}, () => 0);
    const lastDay = days[days.length - 1];
    let travelDay = 0;
    for(let day = 1; day <= lastDay; day++) {
        // this is not travel day
        if(day < days[travelDay]) {
            cache[day] = cache[day - 1];
            continue;
        }
        cache[day] = Math.min(
            cache[day - 1] +  costs[0]
            , cache[Math.max(0, day - 7)] + costs[1]
            , cache[Math.max(0, day - 30)] + costs[2]
        )
        travelDay++;
    }
    // console.log(cache);
    // console.log(lastDay);
    return cache[lastDay];
};