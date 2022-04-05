import Component from "../utils/component.js";

export default class NewsViewer extends Component{
    constructor({ element }) {
        super({ element });
        this._element = element;

        this.on('click', 'back-button', () => {
            this.emit('back');
        });
    }

    show(newsItem) {
        this._news = newsItem;

        this._render();

        super.show();
    }

    _render() {
        const {title, author, description, publishedAt, urlToImage, content} = this._news;

        this._element.innerHTML = `
            <div class="news-details__backToNews" data-element="back-button">
                <i class="fas fa-arrow-left"></i>
                <button class="news-details__button">Back to news</button>
            </div>
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

