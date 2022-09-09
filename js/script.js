const no = document.getElementById("no");
const sim = document.getElementById("yes");
const buttonSend  = document.querySelector('#myBtn');

no.addEventListener("mouseenter", function () {

  var aleatorio = Math.random() * (0.9999999 - 0.15 + 0.15) * 100;
  console.log(aleatorio);

  let aleatorio2 = Math.random() * 100;
  let a = Math.random();
  let b = Math.random();
  
  if (aleatorio > 90) {
    aleatorio = aleatorio - 10;
  } else if (aleatorio < 15) {
    aleatorio = aleatorio + 10;
  }

  if (aleatorio2 > 90) {
    aleatorio2 = aleatorio2 - 10;
  }

  if (a > b) {
    no.style.top = `${aleatorio}%`;
    no.style.right = `${aleatorio2}%`;
  } else {
    no.style.top = `${aleatorio}%`;
    no.style.left = `${aleatorio2}%`;
  }
});

no.addEventListener("click", function () {
  var aleatorio = Math.random() * (0.9999999 - 0.15 + 0.15) * 100;
  console.log(aleatorio);

  let aleatorio2 = Math.random() * 100;
  let a = Math.random();
  let b = Math.random();

  if (aleatorio > 90) {
    aleatorio = aleatorio - 10;
  } else if (aleatorio < 15) {
    aleatorio = aleatorio + 10;
  }
  if (aleatorio2 > 90) {
    aleatorio2 = aleatorio2 - 10;
  }
  if (a > b) {
    no.style.top = `${aleatorio}%`;
    no.style.right = `${aleatorio2}%`;
  } else {
    no.style.top = `${aleatorio}%`;
    no.style.left = `${aleatorio2}%`;
  }
});

buttonSend.addEventListener('click', () => {
  Swal.fire(
    'AEEEE!!!!!',
    'SABIA QUE NAO IRIA ME REJEITAR!',
    'success'
  ).then(function() {
    window.location = "https://www.youtube.com/watch?v=izGwDsrQ1eQ&ab_channel=georgemichaelVEVO"
});
});
