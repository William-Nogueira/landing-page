// API 

fetch('https://gnews.io/api/v4/search?q=mercado%20financeiro&max=3&apikey=7610a7b76d2a0fa633f65b8f3227dad3&lang=pt&country=br')
    .then(response => response.json())
    .then(data => {
        const newsSection = document.querySelector('.container-noticias');

        data.articles.slice(0, 3).forEach(articles => {
            const articleElement = document.createElement('a');
            articleElement.href = articles.url;
            articleElement.target = '_blank';
            articleElement.classList.add('article-noticias');

            // Imagem
            const imageElement = document.createElement('img');
            imageElement.classList.add('noticia-img');
            imageElement.src = articles.image;
            articleElement.appendChild(imageElement);

            // Div para Titulo e descrição
            const articleInfoElement = document.createElement('div');
            articleInfoElement.classList.add('article-noticias-info');
            articleElement.appendChild(articleInfoElement);

            // Fonte
            const fonteElement = document.createElement('h5');
            fonteElement.classList.add('article-noticias-fonte');
            fonteElement.textContent = articles.source.name;
            articleInfoElement.appendChild(fonteElement);

            // Titulo
            const titleElement = document.createElement('h4');
            titleElement.classList.add('article-noticias-titulo');
            titleElement.textContent = articles.title;
            articleInfoElement.appendChild(titleElement);

            // Descrição
            const descriptionElement = document.createElement('p');
            descriptionElement.classList.add('article-noticias-descricao');
            descriptionElement.textContent = articles.description;
            articleInfoElement.appendChild(descriptionElement);

            newsSection.appendChild(articleElement);
        });
    })

    .catch(error => {
        console.error('Erro:', error);
    });

// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Dúvidas

const duvItems = document.querySelectorAll(".duvidas-item");

duvItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("duvidas-item-active");
  });
});

