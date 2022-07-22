Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
Example:

n= 5, m=5: 25
n=-5, m=5:  0


function paperwork(n, m) {
    //   if(n<0){
    //       n=0
      if (n <0 || m<0) return 0;
       return n*m;
    }
    