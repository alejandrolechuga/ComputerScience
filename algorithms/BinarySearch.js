
function binarySearch(array, x){
  var start = 0;
  var end = array.length - 1;
  while (start <= end){ 
     var mid = Math.ceil(start + (end - start)/2); 
     if (array[mid] === x) {
        return mid;
     } else if ( x < array[mid] ) {
        end = mid;
     } else {
        start = mid; 
     }
  }
  return -1;
}

console.log(binarySearch([2,3,6,10,11], 11));

// Recursive version
function binarySearch(target, array) {
  var lo = 0;
  var hi = array.length - 1;
  var mid = Math.ceil((hi - lo) / 2);
  var result = -1;
  if (target === array[mid]) {
    return mid;
  } else if(target > array[mid]) {
    result = binarySearch(target, array.slice(mid));
    if (result > -1 ) {
      result += mid ;
    }
  } else {
    result = binarySearch(target, array.slice(0, mid));
  }

  return result;
}
console.log(binarySearch(6, [2,3,4,5,6,7,8,9]));
