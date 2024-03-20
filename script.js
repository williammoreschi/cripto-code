document.addEventListener("DOMContentLoaded", function() {
  var textInput = document.getElementById('input-texto');
  var outputText = document.getElementById('output-texto');
  var criptografarBtn = document.getElementById('btn-criptografar');
  var descriptografarBtn = document.getElementById('btn-descriptografar');
  var copiarBtn = document.getElementById('btn-copiar');
  var sobreBtn = document.getElementById('btn-sobre');
  var modal = document.getElementById('modal');
  var closeModal = document.getElementById('close');
  var modalMessage = document.getElementById('modal-message');

  criptografarBtn.addEventListener('click', function() {
      outputText.value = processarTexto(textInput.value);
  });

  descriptografarBtn.addEventListener('click', function() {
      outputText.value = processarTexto(textInput.value,false);
  });

  copiarBtn.addEventListener('click', function() {
      outputText.select();
      document.execCommand('copy');
      if(textInput.value.length){
          exibirMensagemNaModal('Texto copiado para a área de transferência!');
        }else{
          exibirMensagemNaModal('Não a texto para ser copiado para a área de transferência!');
      }
  });

  sobreBtn.addEventListener('click', function() {
      exibirMensagemNaModal('Desenvolvido em março/2024 através do programa #ONE, Oracle Next Education em participação da Alura.');
  });

  closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });

function processarTexto(texto, criptografar = true) {
    const criptografia = {
        'e': 'lk',
        'i': 'sd',
        'a': 'po',
        'o': 'zx',
        'u': 'nm',
        ' ': '#',
        'lk': 'e',
        'sd': 'i',
        'po': 'a',
        'zx': 'o',
        'nm': 'u',
        '#': ' ',
        
    };

    const regex = new RegExp(Object.keys(criptografia).join('|'), 'g');

    return texto.replace(regex, match => {
        if (criptografar) {
            return criptografia[match];
        } else {
            return criptografia[match];
        }
    });
}


  function exibirMensagemNaModal(mensagem) {
      modalMessage.textContent = mensagem;
      modal.style.display = 'block';
      setTimeout(function() {
          modal.style.display = 'none';
      }, 5000);
  }
});
