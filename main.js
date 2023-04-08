const findSum = function(array) {
  var add = array.reduce(function(sum, num) {
    return sum + num;
   }, 0);
   return add;
};

const findFrequency = function(array) {
  var mostAndLeast = {};
  var sortArray = array.sort();
  mostAndLeast.most = sortArray[0];
  mostAndLeast.least = sortArray[sortArray.length - 1];
  return mostAndLeast;
};

const isPalindrome = function(str) {
  var pal = [];
  for (j = str.length; j >= 0; j--) {
    pal.push(str.charAt(j));
  }
  return pal.join('').toLowerCase() === str.toLowerCase();
};

const largestPair = function(array) {
  var highestNum = 0;
  array.forEach(function(i, num) {
    var next = num + 1;
    var output = i*array[next];
    if (output > highestNum) {
      highestNum = output;
    }
  })
  return highestNum;
};

const removeParenth = function(str) {
  if (str.includes('(')) {
    str = str.replace('(', '');
  };

  if (str.includes(')')) {
    str = str.replace(')', '');
  };

  return str;
};

const scoreScrabble = function(str) {
  var points = [
    [1 , ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']],
    [2 , ['d', 'g']],
    [3 , ['b', 'c', 'm', 'p']],
    [4 , ['f', 'h', 'v', 'w', 'y']],
    [5 , ['k']],
    [8 , ['j', 'x']],
    [10 , ['q', 'z']]
  ];
  var score = 0;
  for(i = 0; i < str.length; i++) {
    var letter = str.charAt(i);
    for (j = 0; j < points.length; j++) {
    if (points[j][1].some(function(k) {
      return letter === k;
    })) {
      score += points[j][0];
    };
  };
  };
  return score;
};
