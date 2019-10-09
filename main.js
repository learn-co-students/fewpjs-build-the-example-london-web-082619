// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function() {
  changeHeart()
})
const hearts= document.querySelectorAll(".like-glyph")
// for(let heart of hearts){
//   heart.addEventListener('click', mimicServerCall)
// }

//changethe heart
function changeHeart(){
  for(let heart of hearts){
    heart.addEventListener('click', e=>{
      mimicServerCall()
      .then(successStatus => {
        if (heart.innerHTML === EMPTY_HEART){
          heart.innerHTML = FULL_HEART;
          heart.className = 'activated-heart';
        } else {
          heart.innerHTML = EMPTY_HEART;
          heart.className = ""
        }
      })
      .catch(serverErrorMsg => {
        const errorMsg = document.querySelector('#modal')
        errorMsg.className = "";
        errorMsg.innerHTML = serverErrorMsg;
        setTimeout(()=>{
          errorMsg.className = 'hidden';
        },5000)
      });
      
    })

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



// mimicServerCall().then()

// fetch().then()