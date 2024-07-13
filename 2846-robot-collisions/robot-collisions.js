/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
    
    robots = [];
    for(let i=0; i<positions.length; i++) {
        robots.push({
            idx: i
            , position: positions[i]
            , health: healths[i]
            , direction: directions[i]
        })
    };

    robots.sort(function(a, b) {
        return a.position - b.position;
    });

    // console.log(robots);

    const stack = [];
    for(const robot of robots) {
        
        let isBreak = false;
        while(stack.length > 0 && stack[stack.length-1].direction == 'R' && robot.direction == 'L') {
            const back = stack[stack.length-1];
            if(robot.health == back.health) {
                isBreak = true;
                stack.pop()
                break;
            }
            if(robot.health < back.health) {
                isBreak = true;
                back.health--;
                break;
            }
            if(robot.health > back.health) {
                stack.pop();
                robot.health--;
            }
        }
        if(!isBreak) {
            stack.push({...robot})
        }
    }

    stack.sort(function(a, b) {
        return a.idx - b.idx;
    });

    const answer = []
    for(const robot of stack) {
        answer.push(robot.health);
    }
    return answer;
    // console.log("----------------");
    // console.log(stack);
};