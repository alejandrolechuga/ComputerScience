
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
