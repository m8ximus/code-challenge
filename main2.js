const findSum = function(array) {
  var add = array.reduce(function(sum, num) {
    return sum + num;
   }, 0);
   return add;
};

const findFrequency = function(array) {
  var mostAndLeast = {};
  var smallerArray = array.flatMap(function(num, pos, arr) {
    if (arr.includes(num)){
      return [[num, arr.filter(function(i) {
        return num === i;
      })]]
    }
  })
  var most = 0;
  var mostCommon = smallerArray.find(function(num,pos) {
    smallerArray.forEach(function(i, ipos) {
      var check = smallerArray[ipos][1].length;
      if (check > most) {
        most = check;
      }
    })
    return smallerArray[pos][1].length === most;
    
  })
  var least = mostCommon[1].length;
  var leastCommon = smallerArray.find(function(num,pos) {
    smallerArray.forEach(function(i, ipos) {
      var check = smallerArray[ipos][1].length;
      if (check < least) {
        least = check;
      }
    })
    return smallerArray[pos][1].length === least;
  })
  mostAndLeast.most = mostCommon[0];
  mostAndLeast.least = leastCommon[0];
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
  var open = str.indexOf('(');
  var close = str.indexOf(')');
  if (str.includes('(') && str.includes(')')) {
    var remove = str.slice(open, close + 1);
    var newStr = str.split(`${remove}`);
    return newStr.join('');

  }else {
    return str;
  };
  
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
