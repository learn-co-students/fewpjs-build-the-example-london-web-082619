// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById('modal');
let modalMessage = document.getElementById('modal-message');
let hearts = [...document.getElementsByClassName('like')];
hearts.forEach(heart => {
  heart.addEventListener('click', fillHeart)
})


function fillHeart(e){
  mimicServerCall()
    .then(resp => {
      if (resp == 'Pretend remote server notified of action!'){
        console.log('No errors')
        let heart = this
        switchHearts(heart);

        // this.className = 'activated-heart';
        // this.children[0].innerHTML = FULL_HEART
        unshowError();
        return resp;
      } 
    })
    .catch(error => {
      modalMessage.textContent = error;
      modal.className = null;
      setTimeout(unshowError, 5000);
    })
}

function unshowError(){
  modal.className = 'hidden';
}

function switchHearts(currentHeart){
  if (currentHeart.children[0].innerHTML == FULL_HEART){
    currentHeart.children[0].innerHTML = EMPTY_HEART;
    currentHeart.className = 'like';
  } else {
    currentHeart.children[0].innerHTML = FULL_HEART;
    currentHeart.className = 'activated-heart';
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
