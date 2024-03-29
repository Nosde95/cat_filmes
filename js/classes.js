class Ator {
    constructor(id, nome) {
        this.nome = nome;
        this.id = id;
    }
}
class Diretor {
    constructor(id, nome) {
        this.nome = nome;
        this.id = id;
    }
}
class Filme {
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao,) {
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao,
        this.sinopse = sinopse;
        this.cartaz = cartaz;
        this.direcao = direcao;
        this.elenco = elenco;
        this.classificacao = classificacao;
        this.avaliacao = avaliacao;
        this.btnDetalhes = null;
    }
    getCard = async () => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src", this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style", "display:flex; justify-content:space-aroud;");
        let divGenero = document.createElement("div");
        divGenero.setAttribute("style", "flex-grow:1;");
        let divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style", "flex-grow:1;");
        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style", "flex-grow:1;");
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);
        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card;
    }
    setBtnDetalhes = () => {
        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id", this.id);
        this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
    }
    getBtnDetalhes = () => {
        return this.btnDetalhes;
    }
    
    getDetalhesFilme = () => {
        const cardDetalhes = `<div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${this.cartaz}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">${this.titulo}</h5>
                        <p class="card-text">${this.sinopse}</p>
                        <p class="card-text"><small class="text-muted">Last updated 13 mins ago</small></p>
                        <button id="btnSalvar">Salvar<button>
                        <button id="btnRemove">Remover<button>
                        <button id="btnFechar">Fechar<button>
                        </div>
                    </div>
                </div>
            </div>`
        return cardDetalhes
    }

}
