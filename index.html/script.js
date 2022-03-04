(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i=0; i<names.length; i++) {
    var letter = names[i].charAt(0).toLowerCase();
    if (letter ==='j') {
     /* fill in condition here */
      // byeSpeaker.xxxx
      byeSpeaker.speak(names[i]);
    } else {
      // helloSpeaker.xxxx
      helloSpeaker.speak(names[i]);
    }
  }
})();
