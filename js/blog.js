var x = 0;
var text = 'inGenius X Blog';
var speed = 100;

function ingeniusAnimation() {
  if (x < text.length) {
    document.getElementById("Educate").innerHTML += text.charAt(x);
    x++;
    setTimeout(ingeniusAnimation, speed);
  }
}


window.onload = ingeniusAnimation()