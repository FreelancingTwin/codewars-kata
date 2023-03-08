Given the number of problems he actually solved in each week over 444 weeks as P1,P2,P3,P_1, P_2, P_3,P1​,P2​,P3​, and P4P_4P4​, output the number of weeks in which Chef met his target.
Input Format

There is a single line of input, with 444 integers P1,P2,P3,P_1, P_2, P_3,P1​,P2​,P3​, and P4P_4P4​. These are the number of problems solved by Chef in each of the 444 weeks.
Output Format

Output a single integer in a single line - the number of weeks in which Chef solved at least 101010 problems.
Constraints

    1≤P1,P2,P3,P4≤1001 \leq P_1, P_2, P_3, P_4 \leq 1001≤P1​,P2​,P3​,P4​≤100

Sample 1:
Input
Output

12 15 8 10

3

Explanation:

Chef solved at least 101010 problems in the first, second and fourth weeks. He failed to solve at least 101010 problems in the third week. Hence, the number of weeks in which Chef met his target is 333.
Sample 2:
Input
Output

2 3 1 10

1

Explanation:

Chef solved at least 101010 problems in the fourth week. He failed to solve at least 101010 problems in all the other three weeks. Hence, the number of weeks in which Chef met his target is 111.
Sample 3:
Input
Output

12 100 99 11

4

Explanation:

Chef solved at least 101010 problems in all the four weeks. Hence, the number of weeks in which Chef met his target is 444.
Sample 4:
Input
Output

1 1 1 1

0

Explanation:

Chef was not able to solve at least 101010 problems in any of the four weeks. Hence, the number of weeks in which Chef met his target is 000.

// bake your code here
function tenProblemsInAWeek(a,b,c,d){
    let arr = [a, b, c, d]
    return arr.filter(el=> el >= 10).length
    
}