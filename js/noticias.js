let divListaDeNoticias = document.querySelector('#listaDeNoticias');



async function getNoticias () {
    let resposta = await fetch(
        'https://newsapi.org/v2/top-headlines?apiKey=b56fc9c5d7364ba9b956d7f391e98c09&country=br'
    );

    let noticias = await resposta.json();

    console.log(noticias.articles);

    let numeroDeNoticias = 8;

    for (let i = 0; i < 8; i++) {
        let text = `
        <div class="col-3">
            <div class="card">
            <img src="${noticias.articles[i].urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${noticias.articles[i].title}</h5>
                    <p class="card-text">${noticias.articles[i].description}</p>
                    <a href="${noticias.articles[i].url}" class="btn btn-primary">Notícia completa</a>
                </div>
            </div>
        </div>`;

        divListaDeNoticias.innerHTML += text;
    }
}

getNoticias();

