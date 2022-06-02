/* You get an array of numbers, return the sum of all of the positives ones.

 Example [1,-4,7,12] => 1 + 7 + 12 = 20

 Note: if there is nothing to sum, the sum is default to 0. */



function sumOfPostiveNum(arry){
    let sum=0;
    for(i=0; i < arry.length; i++){
    if(arry [i] > 0){
        sum = sum + arry[i]
    }
    }
    return sum
}
console.log(sumOfPostiveNum([2,5,8,6,-4]))  //21
alert(sumOfPostiveNum([2,5,8,6,-4])) 
