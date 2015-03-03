var arrayToList = function(array) {
  var list = {};
  if(array.length === 1) {
    list["value"] = array.shift();
    list["rest"] = null;
    return list;
  } else {
    list["value"] = array.shift();
    list["rest"] = arrayToList(array);
  }

  return list;
}

console.log("Recursive function: %j", arrayToList([1, 2, 3, 4, 5, 6]));

var listToArray = function(list) {
  var array = [];
  if(list["rest"] === null) {
    array.push(list["value"]);
    return array;
  } else {
    array.unshift(list["value"]);
    array = array.concat(listToArray(list["rest"]));
  }

  return array;
}

console.log("Turn List Into Array: %j", listToArray(arrayToList([1, 2, 3, 4, 5, 6])));
