// Input: courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
// Output: 3
// Explanation: 
// There are totally 4 courses, but you can take 3 courses at most:
// First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
// Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day. 
// Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day. 
// The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date.


// Input: courses = [[1,2]]
// Output: 1

// Example 3:

// Input: courses = [[3,2],[4,3]]
// Output: 0

// Input: courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
// Output: 3

function MaxCourses(courses:number[][]):number{
    const sortedArray = courses.sort((a,b) => a[1] - b[1]);

    let totalDuration = 0;
    let count = 0;

    for(let [duration, deadline] of courses){
        if(totalDuration + duration <= deadline){
            totalDuration += duration;
            count++
        } else {
            let maxDuration = 0;
            let maxIndex = -1;
            for(let i = 0; i < count; i++){
                if(courses[i][0] > maxDuration){
                    maxDuration = courses[i][0];
                    maxIndex = i;
                }
            }
            if(maxIndex !== -1){
                totalDuration = totalDuration - maxDuration + duration;
                courses[maxIndex][0] = -1
            }
        }
    }
    return count;
}

// let courses = [[3,2],[4,3]]
let courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
console.log(MaxCourses(courses));