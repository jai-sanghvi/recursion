// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

// An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

function mergeSort(arr) {
  if (arr.length < 2) return [ arr[0] ];
  let left =
    arr.length % 2 === 0
      ? arr.slice(0, arr.length / 2)
      : arr.slice(0, Math.ceil(arr.length / 2));

  let right =
    arr.length % 2 === 0
      ? arr.slice(arr.length / 2)
      : arr.slice(Math.ceil(arr.length / 2));

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  const mergedArray = [];

  while ( (sortedLeft.length > 0) && (sortedRight.length > 0) ) {
    mergedArray.push( (sortedLeft[0] < sortedRight[0]) ? sortedLeft.shift() : sortedRight.shift() );
  }

  if (sortedLeft.length === 0) {
    while (sortedRight.length > 0) {
      mergedArray.push( sortedRight.shift() );
    }
  } else if (sortedRight.length === 0) {
    while (sortedLeft.length > 0) {
      mergedArray.push( sortedLeft.shift() );
    }
  }

  return mergedArray;
}


console.log( mergeSort( [105, 79, 100, 110] ) )