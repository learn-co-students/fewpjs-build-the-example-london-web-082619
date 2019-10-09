// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.getElementsByClassName("like-glyph")
const errorMessage = document.getElementById(`modal`)

document.addEventListener("DOMContentLoaded", () => {
  addListenerToHearts()
})

function addListenerToHearts() {
  for (i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', like)
  }
}

function like() {
  let heart = this;
  mimicServerCall()
    .then(response => {
      updateHeart(heart);
    })
    .catch(error => {
      showError(error);
    });
}

function showError(error){
  errorMessage.hidden = "false";
  errorMessage.querySelector("p").innerText = error;
  setTimeout(hideError, 5000)
 }
  
function hideError(){
  errorMessage.hidden = "true"
}

function updateHeart(heart) {
  if (heart.textContent == EMPTY_HEART) {
    heart.textContent = FULL_HEART;
    heart.classList.add('activated-heart');
  }
  else {
    heart.textContent = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  }
}

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
 
