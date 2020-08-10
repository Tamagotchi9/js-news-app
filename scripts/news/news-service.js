const NewsService = {
    getAll() {
        return fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42514edf5de2420d869f76810a5621a8')
            .then(response => response.json())
            .then(obj => obj.articles);
    },

    getOneById(newsItemTitle) {
        return fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42514edf5de2420d869f76810a5621a8')
            .then(response => response.json())
            .then(obj => obj.articles.find(article => {
                if (article.title.includes(newsItemTitle)) return article;
            }));
    },

}

export default NewsService;