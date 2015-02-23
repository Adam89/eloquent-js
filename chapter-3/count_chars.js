var countChars = function(string, letter) {
  var counter = 0;

  for(var i = 0; i < string.length; i++) {
    if(string[i] === letter) counter++;
  }

  return counter;
}


var countBs = function(string) {
  return countChars(string, "B");
}


console.log(countBs("There are lots BBBBB"));
