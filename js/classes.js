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
    getDetalhesCard = () => {
        let cardDetalhe = document.createElement("div");
        cardDetalhe.setAttribute("class", "card");
        let cardPoster = document.createElement("img");
        cardPoster.setAttribute("class", "card-img-top");
        cardPoster.setAttribute("src", this.cartaz);
        let cardSinopse = document.createElement("p");
        cardSinopse.document.createTextNode(this.sinopse)

        cardDetalhe.appendChild(cardPoster)
        cardDetalhe.appendChild(cardSinopse)

        return detalhesCard;

    }    
}
let genero = ["Ação", "Aventura", "Ficção cientifica"];

    let listarFilmes = async (filmes) => {
        let listaFilmes = await document.querySelector("#lista-filmes");
        listaFilmes.innerHTML = "";
        //console.log(listaFilmes);
        if (filmes.length > 0) {
            filmes.forEach(async (filme) => {
                //console.log(filme);
                listaFilmes.appendChild(await filme.getCard());
                filme.getBtnDetalhes().onclick = () => {
                    detalhesFilme(filme.id);
                }
            });
        }
    }
    let detalhesFilme = async (id) => {
        fetch("http://www.omdbapi.com/?apikey=2795314e&s=" + id)
            .then((resp) => resp.json())
            .then((resp) => {
                let detalhes = new Filme(
                    resp.imdbID,
                    resp.Title,
                    resp.Year,
                    resp.Genre,
                    resp.Runtime,
                    resp.Poster,
                    resp.Plot,
                    resp.Director,
                    resp.Actors,
                    resp.imdbRating,
                    resp.imdbVotes
                );



                console.log(resp);
            });
        getDetalhesCard(detalhes);

    }
