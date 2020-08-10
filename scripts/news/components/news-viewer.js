import Component from "../../component.js";

export default class NewsViewer extends Component{
    constructor({ element }) {
        super({ element });
        this._element = element;

    }

    show(newsItem) {
        this._news = newsItem;
        console.log(newsItem);

        this._render();

        super.show();
    }

    _render() {
        const {title, author, description, publishedAt, urlToImage, content} = this._news;

        this._element.innerHTML = `
            <a href="#" class="news-details__headline">News</a>
            <h1 class="news-details__title">${ title }</h1>
            <div class="news-details__author">
                ${ author }
                <div>Today ${ publishedAt }</div>
            </div>
            <img class="news-details__big-image" src="${ urlToImage }" alt="">
            <div class="news-details__description">${ description }</div>
            <div class="news-details__text">${ content }</div>
        `;
    }
}

