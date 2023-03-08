let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick=()=>{
    if(inputBuscarFilme.value.length > 0){
        fetch("http://www.omdbapi.com/?apikey=2795314e&s="+inputBuscarFilme.value,{mode:"cors"})
        .then((resp)=>resp.json())
        .then((resp)=>{
            console.log(resp);
        });
    }
    return false;
}




/*
let ator = new Ator(1,"JOHN WAYNE");
console.log(ator);
let diretor = new Diretor(1,"Alfred Hitchcock");
console.log(diretor);
let direcao = [
    new Diretor(1,"Lana Wachowski"),
    new Diretor(2,"Lilly Wachowski")
];
let elenco =[
    new Ator(1,"Keanu Reeves"),
    new Ator(2,"Carrie-Anne Moss"),
    new Ator(3,"Laurence Fishburne"),
    new Ator(4,"Joe Pantoliano"),
    new Ator(5,"Hugo Weaving"),
    new Ator(6,"Antony Ray Parker"),
];
let sinopse ="O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro.";
let cartaz = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwLB63Bm8WaqqWPmYLi9_wEXXt47qq1UZBSzw05b9NrXlQyN-O";

let filme =new Filme(
    1,
    "matrix",
    1999,
    //genero,
    102,
    sinopse,
    cartaz,
    direcao,
    elenco,
    14,
    null
);
console.log(filme);*/
