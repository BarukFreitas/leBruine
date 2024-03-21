var restaurantes = {
  "restaurante1": {
      "nome": "Restaurante Sokomo Kudeomi",
      "endereco": "Rua Napoleao Bonaparte, 32, Boa Vista",
      "cidade": "Garanhuns-PE"
  },
  "restaurante2": {
      "nome": "Restaurante Buongiorno",
      "endereco": "Rua Tereza Leão Passos, 109, Cohab 2",
      "cidade": "Garanhuns-PE"
  },
  "restaurante3": {
      "nome": "Batataria da Rosângela",
      "endereco": "Av. Rotary, 455, Santo Antônio",
      "cidade": "Garanhuns-PE"
  },
  "restaurante4": {
      "nome": "Pastelaria do China",
      "endereco": "Av. Senador Jacinto Pinto, 2077, Heliópolis",
      "cidade": "Garanhuns-PE"
  },
  "restaurante5": {
      "nome": "Restaurante Gran Finezzi",
      "endereco": "Rua Farrapos de Portugal, 908, Boa Vista",
      "cidade": "Garanhuns-PE"
  },
  "restaurante6": {
      "nome": "Hamburgueria do Ronaldo",
      "endereco": "Rua Amaury Jorge, 1098, Magano",
      "cidade": "Garanhuns-PE"
  },
  "restaurante7": {
      "nome": "Rock Bar Gus",
      "endereco": "Tv. Souza Gouveia, 287, Cohab 2",
        "cidade": "Garanhuns-PE"
  },
  "restaurante8": {
      "nome": "Pizzaria Massa Quente",
      "endereco": "Rua da Liberdade, 09, Liberdade",
      "cidade": "Garanhuns-PE"
  }
}

function reserva(id){
    window.location.href = 'fazerPedido.html?id=' + id;
}

document.addEventListener('DOMContentLoaded', function(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id){
        const mensagem = 'Você fez pedido no(a): '+restaurantes['restaurante'+id].nome;

        if (id && restaurantes['restaurante' + id]) {
            const mensagem = 'Você fez pedido no(a): ' + restaurantes['restaurante' + id].nome;
            document.getElementById('mensagemPedido').innerText = mensagem;
        } else {
            document.getElementById('mensagemPedido').innerText = 'ID do restaurante inválido.';
        }
    }
});

