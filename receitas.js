let blocos = []
const receitaCatalogo = document.getElementById('receitaCatalogo')

getJson()
async function getJson(){
    await fetch('elementos.json').then((response) => {
        response.json().then((cartoes) =>{
            blocos = cartoes
            exibirCartoes(blocos)
        })
    })
}

function exibirCartoes(listaDeCartoes){
    listaDeCartoes.forEach(cartao => {
        receitaCatalogo.innerHTML += `
        <nav class='cartao p-3 m-4 largura-cartao border-radius bg-gray-light'>
        <img src="${cartao.imagem}" class='cartao-img-top posicao-img-cartao' alt="Imagem de Bolo de Cenoura">
        <h2 class='text-center titulo-cartao p-2'>${cartao.titulo}</h2>
        <div class='cartao-body'>
            <ul class='border-bottom p-2 text-center'>
                <li>${cartao.ingredientes[0]}</li>
                <li>${cartao.ingredientes[1]}</li>
                <li>${cartao.ingredientes[2]}</li>
                <li>${cartao.ingredientes[3]}</li>
            </ul>
            <article class='cartao-text p-2'>${cartao.preparo}</article>
        </div>
        </nav>
        `;
    })
}
