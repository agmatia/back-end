var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById('baixo1').addEventListener('click', function() {
  document.getElementById('myCarousel2').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('baixo2').addEventListener('click', function() {
  document.getElementById('hobbies').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('sobre').addEventListener('click', function() {
  document.getElementById('redes').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('atividade').addEventListener('click', function() {
  document.getElementById('myCarousel2').scrollIntoView({ behavior: 'smooth' });
});


document.getElementById('hobbie').addEventListener('click', function() {
  document.getElementById('hobbies').scrollIntoView({ behavior: 'smooth' });
});