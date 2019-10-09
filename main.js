// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.getElementById("modal")


document.addEventListener("DOMContentLoaded", function() {
  errorModal.hidden = true;
  let hearts = document.getElementsByClassName("like-glyph")
  for (const heart of hearts) {
    heart.addEventListener( "click", toggleLike)
  }

    function toggleLike(event) {
      mimicServerCall()
        .then(function(response) {
          if (event.target.textContent == EMPTY_HEART) {
            event.target.textContent = FULL_HEART;
          } else {
            event.target.textContent = EMPTY_HEART;
          }  
        }).catch(function(error) {
          errorModal.hidden = false;
          setTimeout(function(){errorModal.hidden = true;}, 5000);
        })
    }
})

//------------------------------------------------------------------------------
// Ignore after event.target point. Used only for demo purposes
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
