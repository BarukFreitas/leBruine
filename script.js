// document.getElementById('reserva').onclick=function(){reserva()};
// function reserva(){
//     window.location.href = "fazerPedido.html"
// };

function search() {
    let input = document.getElementById('searchBar').value;
    input = input.toLowerCase();
    let pesquisaTitulos = document.getElementsByClassName('r_titulo');
    let pesquisaEnderecos = document.getElementsByClassName('r_endereco');

    for (let i = 0; i < pesquisaTitulos.length; i++) {
        if (!pesquisaTitulos[i].innerHTML.toLowerCase().includes(input)) {
            pesquisaTitulos[i].style.display = "none";
            pesquisaEnderecos[i].style.display = "none";
        } else {
            pesquisaTitulos[i].style.display = "list-item";
            pesquisaEnderecos[i].style.display = "block";
        }
    }
}


// Função para carregar um arquivo JSON via requisição HTTP (Ajax)
function carregarJSON(caminho, callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', caminho, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                callback(JSON.parse(xhr.responseText));
            } else {
                console.error('Falha ao carregar o JSON. Status:', xhr.status);
            }
        }
    };
    xhr.send(null);
}

// Exemplo de uso:
var caminhoJSON = '/public/restaurantes.json';

carregarJSON(caminhoJSON, function(dados) {
    console.log(dados); // Os dados do JSON estão disponíveis aqui
});
