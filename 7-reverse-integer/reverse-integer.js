/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xcopy = x; 
    x = Math.abs(x)
    let reverse = 0; 
   
    while(x>0){
        let last = x%10; 
        reverse = (10*reverse)+last;
        x = Math.floor(x/10)
    }

    let limit = Math.pow(2,31); 
    if(reverse<-limit || reverse>limit)return 0;
    if(xcopy <0){
        return -reverse;
    }
    else{
        return reverse;
    }


};