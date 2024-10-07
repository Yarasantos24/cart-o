function criacrtao(categoria, perguta, resposta){
    let container = document.getElementsById('container')
    let cartao = document.createElement('article')
    caertao.className = 'cartao'

    cartao.innerHTML =
    <div class= "cartao_conteudo">
        <h3>${categoria}</h3>
        <div class="cartao_conteudo_pergunta">
            <p>${pergunta}</p>
            </div>
            <div CLASS="cartao_conteudo_resposta">
                <p>${resposta}</p>
                </div>
                </div>


let respostaEstaVosivel = false

function viraCartao() {
    respostaEstaVosivel =!respostaEstaVosivel
    cartao.classList. toggle('active', respostaEstaVosivel)
}
cartao.addEventListener('click', viraCartao)


container.appendChild(cartao)

}