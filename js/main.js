// when a user presses a key the corresponding audio file will play//

(() => {
  console.log('drumkit js file loaded');

  function removeHighlight(e) {
    //console.log(e);
    if (e.propertyName !== "transform") {
      return;
    } else {
      e.target.classList.remove('playing');
    }
}

//run this whenever a ket is pressed//

function logKey(e) {
  //debugger;
//console.log(e);
const audio =
document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key =
document.querySelector(`div[data-key="${e.keyCode}"]`);


//add a highlight to the key
key.classList.add('playing');


if (!key) { return; }
//if theres no matching audio element,then dont do anything (avoid errrors)
if (!audio) { return; }

//play auido

audio.currentTime = 0;
audio.play();



}

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend',
  removeHighlight));

  window.addEventListener('keydown', logKey);

})();
