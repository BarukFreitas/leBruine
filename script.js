// document.getElementById('reserva').onclick=function(){reserva()};
// function reserva(){
//     window.location.href = "fazerPedido.html"
// };

// function search() {
//     let input = document.getElementById('searchBar').value;
//     input = input.toLowerCase();
//     let pesquisaTitulos = document.getElementsByClassName('r_titulo');
//     let pesquisaEnderecos = document.getElementsByClassName('r_endereco');

//     for (let i = 0; i < pesquisaTitulos.length; i++) {
//         if (!pesquisaTitulos[i].innerHTML.toLowerCase().includes(input)) {
//             pesquisaTitulos[i].style.display = "none";
//             pesquisaEnderecos[i].style.display = "none";
//         } else {
//             pesquisaTitulos[i].style.display = "list-item";
//             pesquisaEnderecos[i].style.display = "block";
//         }
//     }
// }


// function search(){
//     let input = document.getElementById('searchBar').value;
//     input = input.toLowerCase();
//     let titulo = document.getElementsByClassName('r_titulo');
//     let rua = document.getElementsByClassName('rua');
//     let numero = document.getElementsByClassName('n-fone');

//     for(i = 0; i < numero.length; i++){
//         if(!numero[i].innerHTML.toLowerCase().includes(input)){
//             numero[i].style.display='none';
//         }else{
//             numero[i].style.display='list-item';
//         }
//     }    

//     for(i = 0; i < rua.length; i++){
//         if(!rua[i].innerHTML.toLowerCase().includes(input)){
//             rua[i].style.display='none';
//         }else{
//             rua[i].style.display='list-item';
//         }
//     }

//     for(i = 0; i < titulo.length; i++){
//         if(!titulo[i].innerHTML.toLowerCase().includes(input)){
//             titulo[i].style.display='none';
//         }else{
//             titulo[i].style.display='list-item';
//         }
//     }
// }

function search(){
    let input = document.getElementById('searchBar').value;
    input = input.toLowerCase();
    let info = document.getElementsByClassName('info');
    
    for(i = 0; i < info.length; i++){
        if(!info[i].innerHTML.toLowerCase().includes(input)){
            info[i].style.display='none';
        }else{
            info[i].style.display='list-item';
            info[i].style.display='flex';
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

// Função para exibir o campo de pesquisa de CEP
function exibirCampoCEP() {
    var pesquisaCEP = document.getElementById('pesquisaCEP');
    pesquisaCEP.style.display = 'block';
  }

  // Função para pesquisar o CEP
  function pesquisarCEP() {
    var inputCEP = document.getElementById('inputCEP').value;
    // Aqui você pode adicionar sua lógica para pesquisar o CEP
    console.log('CEP digitado:', inputCEP);
  }

  // Adiciona evento de clique ao link "Garanhuns - PE"
  document.getElementById('localizacao').addEventListener('click', exibirCampoCEP);

