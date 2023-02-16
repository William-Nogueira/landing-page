document.addEventListener('DOMContentLoaded', () => {

    fetch('https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=2f2fb6675e1f4ccf9daa732c5c3d9fc2')
        .then(response => response.json())
        .then(data => {
            const newsSection = document.querySelector('.container-noticias');

            data.articles.slice(0, 3).forEach(article => {
                const articleElement = document.createElement('a');
                articleElement.href = article.url;
                articleElement.target = '_blank';
                articleElement.classList.add('article-noticias');

                // Imagem
                if (article.urlToImage) {
                    const imageElement = document.createElement('img');
                    imageElement.classList.add('noticia-img');
                    imageElement.src = article.urlToImage;
                    imageElement.onerror = function() {
                        this.src = './img/placeholder.jpg';
                    };
                    articleElement.appendChild(imageElement);
                }

                // Div para Titulo e descrição
                const articleInfoElement = document.createElement('div');
                articleInfoElement.classList.add('article-noticias-info');
                articleElement.appendChild(articleInfoElement);

                // Titulo
                const titleElement = document.createElement('h4');
                titleElement.classList.add('article-noticias-titulo');
                titleElement.textContent = article.title;
                articleInfoElement.appendChild(titleElement);

                // Descrição
                const descriptionElement = document.createElement('p');
                descriptionElement.classList.add('article-noticias-descricao');
                descriptionElement.textContent = article.description;
                articleInfoElement.appendChild(descriptionElement);

                newsSection.appendChild(articleElement);
            });
        })

        .catch(error => {
            console.error('Erro:', error);
        });
});
