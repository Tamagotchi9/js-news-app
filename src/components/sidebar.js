import Component from "../utils/component.js";

export default class Sidebar extends Component{
    constructor({ element }) {
        super({ element });
        this._element = element;
        this._news = [];


        this.on('click', 'small-image', (event) => {
            this._currentImage = event.delegateTarget.querySelector('.sidebar__small-img').src;
            this._currentNews = this._news.find(newsItem => newsItem.urlToImage === this._currentImage);
            this._render();
        })

    }

    show(news) {
        this._news = news;
        this._currentNews = news[0];
        this._currentImage = news[0].urlToImage;
        this._render();
        super.show();
    }

    _render() {
         // const {title, author, publishedAt} = this._currentNew;
        this._element.innerHTML = `
            <aside class="sidebar" data-element="sidebar">
            <div class="sidebar__text"><b class="text-black">You</b> may also like</div>
                <ul class="sidebar__photos">
                    ${ this._news.map( newsItem => `
                        <li data-element="small-image">
                            <a class="sidebar__shader">
                                <img 
                                    class="sidebar__small-img" 
                                    src="${ newsItem.urlToImage }" 
                                    alt=""
                                >
                            </a>
                        </li>
                    `).join('')}
                </ul>
                <div class="sidebar__item" data-element="sidebar-item">
                    <img class="sidebar__big-img" src="${ this._currentImage }" alt="">
                    <div class="sidebar__content">
                        <div class="sidebar__title">${this._currentNews.title}</div>
                        <div class="sidebar__author">
                            ${this._currentNews.author}
                            <span class="sidebar__post-time">${this._currentNews.publishedAt}</span>
                        </div>
                    </div>
                </div>
            </aside>
        `;
    }
}