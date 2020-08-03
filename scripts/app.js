import NewsPage from './news/news-page.js'

new NewsPage({
    header: document.querySelector('[data-page-header ]'),
    element: document.querySelector('[data-main-content]'),
    footer: document.querySelector('[data-page-footer]')
});