function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
     var x = musicians[i]
     var y = instruments[i]
     var z = x + " plays " + y
     array.push (z)
  }

return array;
}

function johnLennonFacts(facts) {
  var array = [];
let i = 0;
 while (i < facts.length){
   array.push (facts[i] + "!!!");
   i++;
  }
return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {array.push ("I love the Beatles!");}
 while (number < 15 && maybeTrue());
 function maybeTrue() {
  return Math.random() >= 0.5;}
return array;
}

