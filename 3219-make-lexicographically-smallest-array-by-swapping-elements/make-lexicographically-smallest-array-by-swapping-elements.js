/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
    
    const answer = [...nums];

    nums.sort(function(a, b) {
        return a - b;
    });

    // console.log(oriNums);
    // console.log(nums);
    
    let curGroup = 0;
    const numToGroup = {};
    numToGroup[nums[0]] = curGroup;

    groupToList = {};
    groupToList[curGroup] = [];
    groupToList[curGroup].push(nums[0])

        // console.log(groupToList);

    for(let i=1; i<nums.length; i++) {
        if(Math.abs(nums[i] - nums[i-1]) > limit) {
            curGroup++;
        }

        // numToGroup.push([nums[i], curGroup]);
        numToGroup[nums[i]] = curGroup;
        
        if(!groupToList.hasOwnProperty(curGroup)) {
            groupToList[curGroup] = [];
        }

        // console.log(curGroup);
        // console.log(groupToList[curGroup]);
        groupToList[curGroup].push(nums[i]);
    }

    for(let i=0; i<nums.length; i++) {
        const num = answer[i];
        const group = numToGroup[num];
        answer[i] = groupToList[group].shift();
    }

    // console.log(answer);
    // console.log(numToGroup);
    // console.log(groupToList);

    return answer;
};