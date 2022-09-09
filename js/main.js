const buttonSend  = document.querySelector('.btn_enviar');
const firstQuest  = document.querySelector('#firstQuest');
const secondQuest = document.querySelector('#secondQuest');
const thirdQuest  = document.querySelector('#thirdQuest');

console.log(firstQuest.value)
buttonSend.addEventListener('click', () => {
    inputFirst  = firstQuest.value;
    inputSecond = secondQuest.value;
    inputThird  = thirdQuest.value;
    aux = 0;

    if(inputFirst.toLowerCase() == "pizza"){
      console.log(inputFirst);
      if(inputSecond.toLowerCase() == "cinema"){
        console.log(inputSecond);
        if(inputThird.toLowerCase() == "thalles"){
          console.log(inputThird);
          aux = 1;
        } else{
          console.log("Ela errou a pergunta 3")
        }  
      } else{
        console.log("Ela errou a pergunta 2")
      }
    } else{
      console.log("Ela errou a pergunta 1")
    }
    Swal.fire({
        title: 'Posso confirmar?',
        text: "Você tem certeza das suas respostas?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5DBB63',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, confirmar!',
        timer: 5000
      }).then((result) => {
        if (result.isConfirmed) {
          if (aux === 1){
            Swal.fire(
              'Muito bem!',
              'Parabéns dona Rayane!',
              'success',
              ).then(function() {
                  window.location = "../components/pedido_irrecusavel.html"
              });
          }
          else {
            Swal.fire(
              'Errou Feiao em 1 ali mané',
              'Que coisa feia hein dona Rayane',
              'error'
            )
          }
        }
    });

});

    // location.href = '';
        