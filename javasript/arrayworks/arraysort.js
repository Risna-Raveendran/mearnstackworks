var arr=[10,1,11,2,23,100]

// function compare(n1,n2){
//     if(n1<n2){
//         return -1
//     }
//     else{
//         return 1
//     }
// }
// let com=(n1,n2)=>n1<n2?-1:1

// arrow function
// arr.sort((n1,n2)=>n1<n2?-1:1)
// desending ( n2-n1 ) assending (n1-n2)
arr.sort((n1,n2)=>n2-n1) 

console.log(arr);