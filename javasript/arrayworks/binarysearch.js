var arr = [10, 11, 22, 15, 12, 21, 22, 25,30]
arr.sort((n1,n2)=>n1-n2) 
var element = 30;
var flag = 0;
var count = 1;
var low = 0, upp = arr.length - 1;
while (low <= upp) {
    let mid = Math.floor((low + upp) / 2)
    // CASE 1
    if (element > arr[mid]) {
        low = mid + 1;
    }
    // CASE 2
    else if (element < arr[mid]) {
        upp = mid - 1;
    }
    // CASE 3
    else if (element == arr[mid]) {
        flag = 1;
        break;

    }
    count++
}
console.log(count);
console.log(flag == 0 ? " element nf" : "element found")
