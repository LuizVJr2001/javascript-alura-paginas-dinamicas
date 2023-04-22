function tocaSom (idElementAudio) {
  elemento = document.querySelector(idElementAudio);

  if (elemento && elemento.localName === 'audio') {
    elemento.play();
  }
  else {
    console.log('Elemento não encontrado ou seletor inválido');
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (i = 0; i < listaDeTeclas.length; i++) {
  //cada elemento da lista de teclas
  const tecla = listaDeTeclas[i]

  //pega a classe dos elementos teclas
  const instrumento = tecla.classList[1];

  //template string (usa a classe das teclas para compor o id dos audios)
  const idAudio = `#som_${instrumento}`;

  //função anonima JS
  tecla.onclick = function () {
    tocaSom(idAudio)
  }


  //uso de evento em funções atreladas a evento
  tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
  }
}