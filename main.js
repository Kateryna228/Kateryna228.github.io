function ShowPrice(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop the function from running alltogether
    audio.currentTime = 0; //rewind to start
    audio.play();
    menu-price.classList.add('show-price');
    name-price.classList.add('show-price');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it`s not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);