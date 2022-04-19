/* ** Search Algos ** */

/* Binary Search */

/* Binary Search is a divide-and-conquer algorithm, that divides the array roughly in 
half every time it checks whether an element of the array is the one we're looking for. 
The array needs to be sorted in order to perform a Binary Search. */

function BinarySearch(arr, target) {
  //pointers to begining and end of array.
  let start = 0;
  let end = arr.length - 1;
  //base case
  if (arr.length < 2 && arr[0] !== target) return null;

  while (start <= end) {
    //Finding the middle element of the array. We need to use Math.Floor so we make sure we get a whole number and not a float/decimal.
    let mid = Math.floor(start + (end - start) / 2);
    //If the middle element is the target we are searching for, return middle index.
    if (arr[mid] === target) {
      return mid;
      //Look from beggining to middle of array - 1.
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      //look from middle of array + 1 to the end.
      start = mid + 1;
    }
  }
}
console.log(BinarySearch([1, 2, 3, 6, 8, 11, 15, 19, 22, 44], 8));

/* Time Complexity */

/* O(log -n ) best time complexity would be O(1) if the middle index was exactly the one searching for. */

/******/

/* ** Sort Algos ** */
