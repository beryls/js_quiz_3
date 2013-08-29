//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

// Find the largest number and second largest number
// Then subtract the difference.
// bigDiff(array)
//  [3, 6, 9, 12] => 3
//  [9, 20, 11, 12] => 8

var bigDiff = function(array) {
  var biggest = 0;
  var second = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] >= biggest) {
      second = biggest;
      biggest = array[i];
    } else if (array[i] > second) {
      second = array[i];
    }
  }
  return biggest - second;
}

// return the average of the 2 or 3 numbers in the middle of the array
// (2 if the array has an even number of elements)
// (3 if the array has an odd number of elements).
// averageMedian(array)
//  [2, 6, 9, 11] => 7.5
//  [9, 8, 2, 4, 7] => 4.67

var averageMedian = function(array) {
  var size = array.length;
  if (size % 2 === 0) {
    return parseFloat(((array[size/2 - 1] + array[size/2]) / 2).toFixed(2));
  } else {
    var middle = (size - 1) / 2;
    return parseFloat(((array[middle - 1] + array[middle] + array[middle + 1]) / 3).toFixed(2));
  }
}

// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true

var canBalance = function(array) {
  var sum_array = 0
  var half_sum = 0
  var balance_half = 0
  var num_item = 0
  for (i = 0; i < array.length; i++) {
    sum_array += array[i];
  }
  if (sum_array%2 !== 0) {
    return false;
  } else {
    half_sum = sum_array / 2
    while (balance_half < half_sum) {
      balance_half += array[num_item];
      num_item += 1;
    }
    if (balance_half === half_sum) {
      return true;
    } else {
      return false;
    }
  }
}

// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3

var countClumps = function(array) {
  var clump_sum = 0
  var last = null
  var in_clump = false
  for(i = 0; i < array.length; i++) {
    if (array[i] === last) {
      if (in_clump === false) {
        clump_sum++;
        in_clump = true;
      }
    } else {
      in_clump = false;
    }
    last = array[i];
  }
  return clump_sum
}


