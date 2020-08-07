const NewsService = {
    async getAll() {
        let response = await fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42514edf5de2420d869f76810a5621a8')
        let json = await response.json();
        return json.articles;
    }
}

export default NewsService;