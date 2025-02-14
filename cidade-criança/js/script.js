
var caraTranquiloDiv = document.getElementById("caraTranquilo"); // Pega o elemento com o ID "cara-tranquilo"
var tela = document.getElementById("Bem-vindo"); // Pega o elemento com o ID "Bem-vindo"
var jogo = document.getElementById('jogo') // Pega o elemento com o ID "jogo"

// Função para criar a seção da cidade
function criar() {
    const criarSecao = document.getElementById("criação-cidade"); // Pega o elemento com o ID "criação-cidade"
    let nomeCidade = document.getElementById("nome-cidade-input").value; // Pega o valor do input com o ID "nome-cidade-input"
    let nomeCidadeSpan = document.getElementById("nome-cidade"); // Pega o elemento com o ID "nome-cidade"

    if (nomeCidade === '') { // Verifica se o nome da cidade está vazio
        alert("Digite o nome da cidade!"); // Mostra um alerta pedindo para digitar o nome da cidade
    } else {
        nomeCidadeSpan.textContent = nomeCidade; // Define o texto do elemento "nome-cidade" para o nome da cidade digitado
        criarSecao.style.display = "none"; // Esconde a seção de criação da cidade
        tela.style.display = "flex"; // Mostra a tela de boas-vindas

    }
}


function caraTranquilo(id1, id2, dialogo, display) {
    let p = document.createElement("p"); // Cria um elemento p
    let div = document.createElement("div"); // Cria um elemento div
    let imgCaraTranquilo = document.createElement("img"); // Cria um elemento img
    let imgDialogo = document.createElement("img"); // Cria um elemento img do dialogo

    imgCaraTranquilo.src = "/cidade-criança/img/caraTranquilo.png"; // Define o src da imagem
    imgCaraTranquilo.id = id1; // Define o ID da imagem
    imgCaraTranquilo.style.width = "300px"; // Define a largura da imagem
    imgCaraTranquilo.style.position = 'relative'; // Define a posição da imagem
    imgCaraTranquilo.style.display = display; // Define a posição da imagem

    imgDialogo.src = "/cidade-criança/img/dialogo.png"; // Define o src da imagem
    imgDialogo.style.width = "400px"; // Define a largura da imagem
    imgDialogo.style.position = 'absolute'; // Define a posição da imagem
    p.textContent = dialogo; // Define o texto do dialogo
    p.style.position = 'absolute'; // Define a posição do texto
    p.style.textAlign = 'center'; // Define o alinhamento do texto
    p.style.overflow = 'auto'; // Define o overflow do texto
    p.style.width = '315px'; // Define a largura do texto
    p.style.height = '60px'; // Define a altura do texto
    p.style.padding = '10px'; // Define o padding do texto
    p.style.fontSize = '25px'; // Define o tamanho da fonte do texto
    div.id = id2; // Define o ID da div de dialogo

    caraTranquiloDiv.appendChild(imgCaraTranquilo); // Adiciona a imagem ao elemento com o ID "cara-tranquilo"
    caraTranquiloDiv.appendChild(div); // Adiciona a div ao elemento com o ID "cara-tranquilo"
    div.appendChild(imgDialogo); // Adiciona a imagem do dialogo à div de dialogo
    div.appendChild(p); // Adiciona o texto do dialogo à div de dialogo
}


function BotãoCreat(id, função, display) {
    let div = document.createElement("div"); // Cria um elemento div
    div.id = id ; // Define o ID da div de dialogo
    div.addEventListener('click',função); // Define a função do botão;
    div.style.display = display
    jogo.appendChild(div); // Adiciona a div ao elemento com o ID "jogo"
    //jogo.style.backgroundImage = "url('/cidade-criança/img/cidade1.png')";
}




// Função para iniciar a aplicação
function iniciar() {
    caraTranquilo("cara", "dialogo", 'vamos limpar o mato', 'block') // Cria a imagem do personagem e do dialogo
    tela.style.display = "none"; // Esconde a tela de boas-vindas
    jogo.style.display = "block"; // Mostra a seção do jogo
}



BotãoCreat("LimpaMato",LimpaMato,'block');

function LimpaMato() {
    jogo.style.backgroundImage = "url('/cidade-criança/img/cidade1.png')";
    document.getElementById("LimpaMato").style.display = "none";
    document.getElementById("cara").style.display = "none";
    document.getElementById("dialogo").style.display = "none";
    BotãoCreat("ConsertaAsfalto",ConsertaAsfalto,'block');
    caraTranquilo("cara2", "dialogo2", 'Agora vamos consertar o asfalto','block');
}

function ConsertaAsfalto() {
    jogo.style.backgroundImage = "url('/cidade-criança/img/cidade2.png')";
    document.getElementById("LimpaMato").style.display = "none";
    BotãoCreat("PintaLinha",PintaLinha,'block');
}


