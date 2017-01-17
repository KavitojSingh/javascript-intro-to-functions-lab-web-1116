function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
   return string.toLowerCase()
 }

 function logShout(string) {
   console.log(string.toUpperCase())
 }

 function logWhisper(string) {
   console.log(string.toLowerCase())
 }

 function sayHiToGrandma(word) {
   if (word === "I love you, Grandma.") {
     return "I love you, too."
   }
   else if (word === word.toLowerCase()) {
     return "I can't hear you!"
   }
   else if (word === word.toUpperCase()){
     return "YES INDEED!"
   }
 }
 
