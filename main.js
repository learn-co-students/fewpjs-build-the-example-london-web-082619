// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector("#modal");
const likeButton = document.querySelectorAll(".like-glyph");
const modalMessage = document.querySelector("#modal-message");

function hiddenModal() {
  errorModal.classList.add("hidden");
} 
hiddenModal(); //not return-- error

likeButton.forEach(like => {
  like.addEventListener('click', clickHeart);
}) //iterates through each like. so you can select each one

function clickHeart(){ 
  let like = this; //identifies which heart to like
 mimicServerCall()
   .then(             //like => {  ====== because im calling another function
     changeHeart(like)
   )
   .catch(error => {
     errorModal.classList.remove("hidden");
     modalMessage.textContent = error;
     setTimeout(hiddenModal(), 5000); //no errorModal. needed
   })
 }

function changeHeart(like) {// click to full heart
  like.classList.toggle("activated-heart");
  if (like.textContent === EMPTY_HEART){
    like.textContent = FULL_HEART;
  } else {
    like.textContent = EMPTY_HEART;
  }
}


  //   like.classList.add(".activated-heart");
  //   isHeart = true;
  // } else {
  //   like.classList.remove(".acticated-heart");
  //   isHeart = false;
  // }
  // isHeart != isHeart
  // like.classList.toggle(".activated-heart");




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
