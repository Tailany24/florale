console.log("custom.js carregado com sucesso!");

$(function() {
  // Abre e fecha o menu ao clicar no botão do menu
  $('.menu-btn').click(function(event) {
    $('.navbar .menu').toggleClass("active");
    $(this).find('i').toggleClass("active"); // Alterna a classe do ícone do menu
    event.stopPropagation(); // Evita que o clique se propague para o documento
  });
});

  