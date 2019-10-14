// import { S_IFDIR } from "constants";

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// eventlistener; if 'like-glyph' -> make full heart and .activated-heart

const likeButtons = document.querySelectorAll('span.like-glyph, span.activated-heart')

likeButtons.forEach(element => {
  element.addEventListener('click', () => {
        if(element.className == 'like-glyph'){
          element.className = 'activated-heart'
          element.innerText=FULL_HEART}
        else {
          element.className = 'like-glyph'
          element.innerText=EMPTY_HEART}
  })
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
