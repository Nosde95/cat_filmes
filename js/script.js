let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let navFavoritos=document.querySelector("#nav-favoritos");

navFavoritos.onclick=()=>{
	listarFavoritos();
}
btnBuscarFilme.onclick=()=>{
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=2795314e&s="+inputBuscarFilme.value,{mode:"cors"})
        .then((resp)=>resp.json())
        .then((resp)=>{
            resp.Search.forEach((item)=>{
				let filme=new Filme(
					item.imdbID,
					item.Title,
					item.Year,
					null,
					item.Plot,
					item.Poster,
					null,
					null,
					null,
					null,
					null
				);
				filmes.push(filme);
            });
			listarFilmes(filmes);
        });
    }
    return false;
}
let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector('#lista-filmes')
    listaFilmes.style.display = "flex"
    listaFilmes.innerHTML = ""

    document.querySelector("#mostrar-filme").innerHTML = ""
    document.querySelector("#mostrar-filme").style.display = "none"

    if(filmes.length > 0){
        filmes.forEach(async(filme) => {
            console.log(filme)
            listaFilmes.appendChild(await filme.getCard())
            filme.getBtnDetalhes().onclick = () => {
                detalhesFilme(filme.id)
            }
        })
    }
}

let detalhesFilme = async (id) => {
    fetch("http://www.omdbapi.com/?apikey=147c4f5d&i="+id)
    .then((resp) => resp.json())
    .then((resp) => {
        console.log(resp)
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.plot,
			resp.Poster,
            resp.Runtime,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating
        )
        console.log(filme)
        document.querySelector("#mostrar-filme").innerHTML = filme.getDetalhesFilme();

		document.querySelector("#btnFechar").onclick=()=>{
			document.querySelector("#lista-filmes").style.display = "none";
			document.querySelector("#mostrar-filme").innerHTML="";
        	document.querySelector("#mostrar-filme").style.display = "flex";
		}
        document.querySelector("#btnSalvar").onclick=()=>{
			salvarFilme(filme);
		}
		
        document.querySelector("#lista-filmes").style.display = "none";
        document.querySelector("#mostrar-filme").style.display = "flex";
    })

}

function salvarFilme(filme){
	let filmesString=localStorage.getItem('filmesFavoritos');
	let filmes=null;
	if(filmesString){
		filmes=JSON.parse(filmesString);
		filmes.push(filme);
		
	}else{
		filmes=[filme];
	}
	filmes=JSON.stringify(filmes);
	localStorage.setItem("filmesFavoritos",filmes);
	
}

function listarFavoritos(){
	let filmesFavoritos=localStorage.getItem('filmesFavoritos');
	filmesFavoritos=JSON.parse(filmesFavoritos);
	let filmes=new Array();
	filmesFavoritos.forEach((item)=>{
		let filme = new Filme(
			item.id,
			item.titulo,
			item.ano,
			item.genero,
			item.duracao,
			item.cartaz,
			item.direcao,
			item.elenco,
			item.classificacao,
			item.avaliacao
		);
		filmes.push(filme);
	});
	listarFilmes(filmes);
}