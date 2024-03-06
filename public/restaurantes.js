var restaurantes = {
    "restaurante1": {
      "nome": "Restaurante Sokomo Kudeomi",
      "endereco": "Rua Napoleao Bonaparte, 32, Boa Vista",
      "cidade": "Garanhuns-PE"
    },
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    var nomeRestauranteElement = document.getElementById('nomeRestauranteValor');
    nomeRestauranteElement.textContent = restaurantes.restaurante1.nome;
    console.log(restaurantes);
  });
  