function mergeSort(arr) {
  const arrLength = arr.length;
  // If the length of the array is 1 or below, then the array is already sorted
  if (arrLength < 2) {
    return;
  } else {
    // This is the mid point in which the array can be split up
    let mid = Math.floor(arrLength / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid - arrLength);

    // Assign each element in index i to the left array
    for (let i = 0; i < mid - 1; i++) {
      left[i] = arr[i];
    }
    // Assign each element in index i - mid to the right array
    for (let i = mid; i < arrLength; i++) {
      right[i - mid] = arr[i];
    }

    // Recursion to keep splitting left and right array until it can't be split anymore
    mergeSort(left);
    mergeSort(right);
    return merge(left, right, arr);
  }
}

function merge(left, right, arr) {
  let leftLength = left.length;
  let rightLength = right.length;

  // Represents the smallest unpicked number in the left array
  let i = 0;
  // Represents the smallest unpicked number in the right array
  let j = 0;
  // Represents the position that needs to be filled in, in the original array as we are overwriting it
  let k = 0;

  while (i < leftLength && j < rightLength) {
    // Comparing the index of the left array to index of the right array to see which is smaller
    if (left[i] <= right[j]) {
      // If the left index is smaller, than it will be added into the array
      arr[k] = left[i];
      // Then increment k, to go to the next position of the array and i to compare the next index of the left array to the current position in the right array
      k += 1;
      i += 1;
    } else {
      // Otherwise, add the right index into the array
      arr[k] = right[j];
      j += 1;
      k += 1;
    }
  }

  // Check if there are left overs in the left array
  while (i < leftLength) {
    arr[k] = left[i];
    i += 1;
    k += 1;
  }

  // Check if there are left overs in the right array
  while (j < rightLength) {
    arr[k] = right[j];
    j += 1;
    k += 1;
  }

  return arr;
}

console.log(mergeSort([1, 10, 5, 2, 3, 9]));
