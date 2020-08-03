export default class NewsCatalog {
    constructor({ element }) {
        this._element = element;

        this._render();
    }

    _render() {
        this._element.innerHTML = `
                <div class="news__item">
                    <div class="news__inner">
                        <div class="news__info">
                            <div class="news__post-time">
                                <i class="far fa-clock"></i>
                                <div>11H</div>
                            </div>
                            <div class="news__post-save">
                                <i class="far fa-bookmark"></i>
                                <div>SAVE</div>
                            </div>
                        </div>
                        <img class="news__photo" src="https://via.placeholder.com/250x150" alt="">
                        <div class="news__content">
                             <a href="#" class="news__suptitle">NEWS</a>
                             <div class="news__title">Kodak Gave Its CEO Stock Options, Then News Broke of a Million-Dollar Federal Deal and Prices Soared</div>
                             <div class="news__author">Alyse Stanley</div>
                             <div class="news__description">The Eastman Kodak Company gave its CEO 1.75 million stock options just one day before the company’s stock soared…</div>
                        </div>
                    </div>
                </div>
        `;
    }
}