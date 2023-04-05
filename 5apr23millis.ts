Write an asyncronous function that accepts a positive integer millis and sleeps for that many milliseconds. It can resolve any value.

 

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.

/**
 * @param {number} millis
 */
async function sleep(millis) {
   await new Promise(resolve => setTimeout(resolve, millis))
   return millis
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */