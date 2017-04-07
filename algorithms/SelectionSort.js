function swap(array, a, b) {
  var hold = array[a];
  array[a] = array[b];
  array[b] = hold;
}

function indexOfMinimum(array, startIndex) {
  var minValue = array[startIndex];
  var minIndex = startIndex;
  var length = array.length;
  for (var i = minIndex + 1; i < length; i++) {
    if (minValue > array[i]) {
      minValue = array[i];
      minIndex = i;
    }
  }
  return minIndex;
}


function selectionSort(array) {
  var length = array.length;
  var min = 0;
  for (var i = 0; i < length; i++) {
    min = indexOfMinimum(array, i + 1);
    if (array[min] < array[i]) {
      swap(array, min, i);
    }
  }
}



function assert(a, b) {
  a = typeof a === 'object' ? JSON.stringify(a) : a;
  b = typeof b === 'object' ? JSON.stringify(b) : b;
  console.log( a === b ? 'PASSED TEST' : 'FAILED TEST');
}

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
//println("Array after sorting:  " + array);

assert(array, [7, 9, 11, 22, 42, 88, 99]);
