function createCard(data,id, titulo, texto) {
    return `
    <div class="card">
        <div class="data-fav">
            <p class="data">${data}</p>
            <img id="${id}" class="img" src="./heart.svg" alt="coração" onclick="pegaId(${id})">
        </div>

        <h3>${titulo}</h3>
        <p class="texto">${texto}</p>
    </div>
    `;
}

document.querySelector("#posts").innerHTML =
    createCard(
        "18 de nov, 2022",
        "id1",
        "Tim Berners-Lee vai leiloar código-fonte da web",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
    )
    +
    createCard(
        "17 de nov, 2022",
        "id2",
        "Tem Firefox novo no pedaço e você vai querer migrar",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
    );

// ATIVAR e DESATIVAR o Favorito 
function pegaId(id){
    console.log(id)
    let img = id.src
    console.log(img)
    const src = img
    console.log(src)

}
/*

let img = document.querySelector(".img")
const src = img.src

function ativar(){
    console.log(img.src)

    if(img.src != src){
        img.src = "./heart.svg"
        console.log("desativou")
    } else {
        img.src = "./heart-actived.svg"
        console.log("ativou")
    }
    console.log(src)
    console.log(img.src)
    console.log(img)


}

*/



