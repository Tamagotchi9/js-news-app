export default class NewsCatalog {
    constructor({ element, news }) {
        this._element = element;
        this._news = news;

        this._render();
    }

    _render() {
        this._element.innerHTML = `
                <ul class="news">
                    ${ this._news.map( newsItem => `
                    <li class="news__item">
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
                            <img class="news__photo" src="${ newsItem.urlToImage }" alt="">
                            <div class="news__content">
                                 <a href="#" class="news__suptitle">NEWS</a>
                                 <div class="news__title">${ newsItem.title }</div>
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