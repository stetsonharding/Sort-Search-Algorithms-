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

//Sorting Algos

/* Quick Sort */

/* Quick Sort algorithm follows Divide and Conquer approach. It divides elements into smaller parts based on some condition and performing the sort operations on those divided smaller parts.  */

function QuickSort(arr) {
  //Don't change original array.
  let copiedArr = [...arr];

  if (arr.length <= 1) {
    return copiedArr;
  }

  //take element off beggining of array, if any element in the array === pivote place in middle array.
  let pivot = copiedArr.shift();

  //Arrays to store small, middle, and large elements based on pivot
  let smallElementsArray = [];
  let middleElementsArray = [pivot];
  let largeElementsArray = [];

  //placing element in correct array based on pivot
  //while loop stops when arrays length is 0;
  while (copiedArr.length) {
    //getting element at beggining of array
    let element = copiedArr.shift();

    if (element === pivot) {
      middleElementsArray.push(element);
    } else if (element < pivot) {
      smallElementsArray.push(element);
    } else {
      largeElementsArray.push(element);
    }
  }

  //using recurstion to break up smaller and larger elements array.
  let sortedSmallerElementsArray = QuickSort(smallElementsArray);
  let sortedLargerElementsArray = QuickSort(largeElementsArray);

  //combine all array together to return result
  return sortedSmallerElementsArray.concat(
    middleElementsArray,
    sortedLargerElementsArray
  );
}

console.log(QuickSort([1, 3, 7, 2, 10, 19, 4, 8, 0, 55]));

/* Time Complexity */

/* O(N(logN)) Worse case is O(n^2) */

/******/

/* Merge Sort */
/* Merge sort uses the concept of divide-and-conquer to sort the given list of elements. It breaks down the problem into smaller subproblems until they become simple enough to solve directly. */

function MergeSort(arr) {
  //return original array if 0 or 1 item in it.
  if (arr.length < 2) {
    return arr;
  }

  //Sort array if only 2 items in it
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }

  //middle point of array, used to split array.
  const middle = Math.floor(arr.length / 2);
  //Split arrays
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  //using recurtion to keep splitting array until length == 2.

  const leftSortedArray = MergeSort(leftArray);
  const rightSortedArray = MergeSort(rightArray);

  //merging all arrays together while sorting
  let mergedArray = [];
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;
  while (
    leftArrayIndex < leftSortedArray.length ||
    rightArrayIndex < rightSortedArray.length
  ) {
    if (
      leftArrayIndex >= leftSortedArray.length ||
      leftSortedArray[leftArrayIndex] > rightSortedArray[rightArrayIndex]
    ) {
      mergedArray.push(rightSortedArray[rightArrayIndex]);
      rightArrayIndex++;
    } else {
      mergedArray.push(leftSortedArray[leftArrayIndex]);
      leftArrayIndex++;
    }
  }

  return mergedArray;
}

console.log(MergeSort([1, 6, 3, 19, 2, 9, 17, 11, 5, 5, 22, 75]));

/* Time Complexity */

/* O(N(logN)) Worse case is O(n^2) */

/******/
