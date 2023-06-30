function secondHighest(arr) {
  // Check if arr is empty or has only 1 element
  if (arr.length < 2) {
    return -Infinity;
  }

  // Find the highest element
  let highest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }

  // Find the second highest element
  let secondHighest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== highest && arr[i] > secondHighest) {
      secondHighest = arr[i];
    }
  }

  // Check if all elements are the same
  if (secondHighest === -Infinity) {
    return -Infinity;
  }

  return secondHighest;
}
//your JS code here. If required.
function secondHighest(arr) {
  // Check if arr is empty or has only 1 element
  if (arr.length < 2) {
    return -Infinity;
  }

  // Find the highest element
  let highest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }

  // Find the second highest element
  let secondHighest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== highest && arr[i] > secondHighest) {
      secondHighest = arr[i];
    }
  }

  // Check if all elements are the same
  if (secondHighest === -Infinity) {
    return -Infinity;
  }

  return secondHighest;
}
