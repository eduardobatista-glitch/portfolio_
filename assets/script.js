// Filtros e busca da página de publicações
(function () {
  var botoes = document.querySelectorAll('.filtros button');
  var pubs = document.querySelectorAll('.pub');
  var busca = document.getElementById('busca');
  var vazio = document.getElementById('vazio');
  if (!pubs.length) return;

  var categoria = 'todos';

  function normalizar(t) {
    return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function aplicar() {
    var termo = busca ? normalizar(busca.value.trim()) : '';
    var visiveis = 0;
    pubs.forEach(function (p) {
      var cats = (p.getAttribute('data-cat') || '').split(' ');
      var okCat = categoria === 'todos' || cats.indexOf(categoria) !== -1;
      var okBusca = !termo || normalizar(p.textContent).indexOf(termo) !== -1;
      p.hidden = !(okCat && okBusca);
      if (!p.hidden) visiveis++;
    });
    if (vazio) vazio.hidden = visiveis !== 0;
  }

  botoes.forEach(function (b) {
    b.addEventListener('click', function () {
      botoes.forEach(function (x) { x.classList.remove('ativo'); x.setAttribute('aria-pressed', 'false'); });
      b.classList.add('ativo');
      b.setAttribute('aria-pressed', 'true');
      categoria = b.getAttribute('data-filtro');
      aplicar();
    });
  });

  if (busca) busca.addEventListener('input', aplicar);
})();
