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

var prepend = function(element, list) {
  var new_list = {}
  new_list["value"] = element;
  new_list["rest"] = list;

  return new_list;
}

console.log("Prepend element: %j", prepend(5, arrayToList([1, 2, 3, 4, 5, 6])));

var nth = function(list, number) {
  if(number === 1 || list["rest"] === null) {
    return list["value"];
  } else {
    return nth(list["rest"], number - 1);
  }
}

console.log("Nth recursive element: %j", nth(arrayToList([10, 6, 4, 5, 3, 2]), 3));
