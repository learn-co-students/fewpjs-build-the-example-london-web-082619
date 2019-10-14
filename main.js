// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const likes = document.querySelectorAll('.like-glyph')

function likeProcess(e) {
  let heart = e.target;
  mimicServerCall()
    .then(function() {
      if (heart.innerHTML === EMPTY_HEART) {
      heart.innerText = FULL_HEART
      heart.className = "activated-heart"
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = ""
      }
    }) 
    .catch(function(error) {
      document.getElementById("modal").className = ""
      
      setTimeout(function () {
        document.getElementById("modal").className = "hidden" }, 5000
      )
    })
}


for (let elements of likes) {
  elements.addEventListener("click", likeProcess)
}

// const activated = document.querySelectorAll(".activated-heart")


  // document.addEventListener("click", function(e) {
  //     let heart = e
  //     heart.innerText = `${EMPTY_HEART}`
  //     heart.className = "like-glyph"
  // })




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
