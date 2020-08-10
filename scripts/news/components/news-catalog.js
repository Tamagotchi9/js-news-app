import Component from "../../component.js";

export default class NewsCatalog extends Component{
    constructor({ element }) {
        super({ element });
        this._element = element;
        this._news = [];

        this._render();

        this.on('click', 'news-link',  (event) => {
            const newsElement = event.target.closest('[data-element="news-item"]');

            this.emit('news-selected', newsElement.dataset.newsTitle);
        });
    }

    show(news) {
        this._news = news;
        this._render();
        super.show();
    }

    _render() {
        this._element.innerHTML = `
                <ul class="news">
                    ${ this._news.map( newsItem => `
                    <li class="news__item" data-element="news-item" data-news-title='${newsItem.title}'>
                        <div class="news__inner">
                            <div class="news__info">
                                <div class="news__post-time">
                                    <i class="far fa-clock"></i>
                                    <div>${newsItem.publishedAt.slice(11, 19)}</div>
                                </div>
                                <div class="news__post-save">
                                    <i class="far fa-bookmark"></i>
                                    <div>SAVE</div>
                                </div>
                            </div>
                            <img class="news__photo"  data-element="news-link" src="${ newsItem.urlToImage }" alt="">
                            <div class="news__content">
                                 <a href="#" class="news__suptitle">NEWS</a>
                                 <div class="news__title" data-element="news-link">${ newsItem.title }</div>
                                 <div class="news__author">${ newsItem.author }</div>
                                 <div class="news__description">${ newsItem.description }</div>
                            </div>
                        </div>
                    </li>
                    `).join('')}
                </ul>
        `;
    }
}