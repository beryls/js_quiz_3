//      ___       _______      ___       __  .__   __.  ______    __
//     /   \     /  _____|    /   \     |  | |  \ |  | |      \  |  |
//    /  ^  \   |  |  __     /  ^  \    |  | |   \|  | `----)  | |  |
//   /  /_\  \  |  | |_ |   /  /_\  \   |  | |  . `  |     /  /  |  |
//  /  _____  \ |  |__| |  /  _____  \  |  | |  |\   |    |__|   |__|
// /__/     \__\ \______| /__/     \__\ |__| |__| \__|     __    (__)
//                                                        (__)

// The first question's tests are written.
// See quiz.js for more details

describe('a quiz', function() {

  it('is about JavaScript and testing with Jasmine', function() {
    expect(QUIZ_TOPICS).toContain('jasmine');
    expect(QUIZ_TOPICS).toContain('javascript');
  });

});

describe('a function called bigDiff', function() {

  it('should return the difference between the largest and second largest numbers in an array', function() {
    first_array = [3, 6, 9, 12];
    expect(bigDiff(first_array)).toEqual(3);
  });

  it('should return that difference even if the array is not in increasing order', function() {
    second_array = [9, 20, 11, 12];
    expect(bigDiff(second_array)).toEqual(8);
  });

});

describe('a function called averageMedian', function() {

  it('should return the average of the 2 middle numbers in an array of even length', function() {
    first_array = [2, 6, 9, 11];
    expect(averageMedian(first_array)).toEqual(7.5);
  });

  it('should return the average of the 3 middle numbers in an array of odd length', function() {
    second_array = [3, 5, 9, 4, 2];
    expect(averageMedian(second_array)).toEqual(6);
  });

  it('should return a number rounded to 2 decimal places', function() {
    second_array = [9, 8, 2, 4, 7];
    expect(averageMedian(second_array)).toEqual(4.67);
  });

});

describe('a function called canBalance', function() {

  it('should return true if an array can be split into two parts of equal value', function() {
    first_array = [1, 2, 1, 1, 1];
    expect(canBalance(first_array)).toEqual(true);
  });

  it('should return false if an array cannot be split into two parts of equal value', function() {
    second_array = [2, 1, 1, 2, 1];
    expect(canBalance(second_array)).toEqual(false);
  });

  it('should return true even if the number of elements in each part is heavily unbalanced', function() {
    third_array = [3, 4, 1, 2, 3, 1];
    expect(canBalance(third_array)).toEqual(true);
  });

});

describe('a function called countClumps', function() {

  it('should return the number of times 2 or more of the same number appear sequentially', function() {
    first_array = [2, 1, 1, 1, 1, 3, 3, 3, 1];
    expect(countClumps(first_array)).toEqual(2);
  });

  it('should return the correct count even if there is a break between the clumps', function() {
    second_array = [9, 3, 3, 4, 4, 4, 6, 7, 7, 7];
    expect(countClumps(second_array)).toEqual(3);
  });

});