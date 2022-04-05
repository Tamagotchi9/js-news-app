const NewsService = {
    async getAll() {
        const response = await fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42514edf5de2420d869f76810a5621a8');
        const obj = await response.json();
        return obj.articles;
    },

    async getOneByTitle(newsItemTitle) {
        const response = await fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42514edf5de2420d869f76810a5621a8');
        const obj = await response.json();
        return obj.articles.find(article => {
            if (article.title.includes(newsItemTitle))
                return article;
        });
    },

    async getSidebarNews() {
        const response = await fetch('http://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=42514edf5de2420d869f76810a5621a8');
        const obj = await response.json();
        return obj.articles.slice(0, 3);
    },

}

export default NewsService;