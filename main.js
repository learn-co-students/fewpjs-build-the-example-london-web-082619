// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.querySelector("#modal");
const hearts = document.querySelectorAll(".like-glyph");

hearts.forEach(heart => {
  heart.addEventListener("click", like);
});

function like() {
  let heart = this;
  mimicServerCall()
    .then(response => {
      toggleHeartState(heart);
    })
    .catch(error => {
      displayError(error)
    });
}

function toggleHeartState(heart) {
  heart.classList.toggle("activated-heart");
  if (heart.textContent === EMPTY_HEART) {
    heart.textContent = FULL_HEART;
  } else {
    heart.textContent === EMPTY_HEART;
  }
}

function displayError(error) {
  errorModal.classList.remove("hidden");
  message = document.querySelector("#modal-message");
  message.textContent = error;
  setTimeout(hideErrorModal, 5000);
}

function hideErrorModal() {
  errorModal.classList.add("hidden");
}

hideErrorModal();


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
