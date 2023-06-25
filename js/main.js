let key = document.querySelectorAll('.key');

function f1 (e) {
  console.log (e.keyCode );
  key.forEach((element) => {
    element.classList.remove('active');
  });
  document.querySelector(`.key[data-key="${e.keyCode}"]`).classList.add('active'); 
}


document.querySelector('.i-11').onkeydown = f1;