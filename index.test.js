var myFunc = require( "./index" );

var thingToSort = `{
 "7": "seventh",
 "1": "first",
 "3": "third",
 "2": "second",
 "20": "twentyth",
 "11": "eleventh"
}`;

it("should get the correct number of items", () => {  
  var sorted = myFunc(thingToSort);
  console.log("sorted: " + sorted)
});