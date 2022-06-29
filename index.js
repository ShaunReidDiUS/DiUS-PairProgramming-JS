var _ = require('lodash');

module.exports = (inputJsonString) => {
  var deserialised = JSON.parse(inputJsonString);

  //get keys
  var keys = [];
  for (var key in deserialised) {
    keys.push(key);
  }
  console.log(keys);

  //sort
  for (var i = 1; i <= keys.length - 1; i = i + 1) {
    for (var j = 0; j <= keys.length - i - 1; j = j + 1)
      if (parseInt(keys[j]) > parseInt(keys[j + 1])) {
        var temp = keys[j];
        keys[j] = keys[j + 1];
        keys[j + 1] = temp;
      }
  }
  console.log(keys);

  //build string keys
  var resultItems = []
  for (var i = 0; i < keys.length; i = i + 1) 
    resultItems.push("\"" + keys[i] +"\": \"" + deserialised[keys[i]] +"\"" )

  console.log(resultItems);

  //build json object
  var resultStr = '{'
  for (var i = 0; i < resultItems.length; i = i + 1) {
    resultStr = resultStr + resultItems[i];
    if( i != resultItems.length -1 )
      resultStr = resultStr + ','
  }
  resultStr = resultStr + '}'
  
  return resultStr;
};