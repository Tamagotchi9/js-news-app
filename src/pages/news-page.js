import NewsCatalog from "../components/news-catalog.js";
import NewsViewer from "../components/news-viewer.js";
import Sidebar from "../components/sidebar.js";
import NewsService from "../utils/news-service.js";


export default class NewsPage {
    constructor({ header, element, footer }) {
        this._element = element;
        this.header = header;
        this.footer = footer;

        this._render();

        this._initCatalog();
        this._initViewer();
        this._initSidebar();
    }

    _initCatalog() {
        this._catalog = new NewsCatalog({
            element: this._element.querySelector('[data-component="news-catalog"]'),
        })
        this._showNews();

        this._catalog.subscribe('news-selected', (newsItemTitle) => {
            NewsService.getOneByTitle(newsItemTitle)
                .then(newsItem => {
                    this._catalog.hide();
                    this._viewer.show(newsItem);
                })
        });
    }


    _initViewer() {
        this._viewer = new NewsViewer({
            element: this._element.querySelector('[data-component="news-viewer"]'),
        });

        this._viewer.subscribe('back', () => {
            this._viewer.hide();
            this._showNews();
        });
    }

    _initSidebar() {
        this._sidebar = new Sidebar({
            element: this._element.querySelector('[data-component="sidebar"]'),
        });

        this._showSidebarNews();
    }

    async _showSidebarNews() {
        const news = await NewsService.getSidebarNews();
        this._sidebar.show(news);
    }

    async _showNews() {
        const news = await NewsService.getAll();
        this._catalog.show(news);
    }

    _render() {
        this.header.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <h1 class="header__title">Business News</h1>
                        <p class="header__subtitle">News that's everyone needs to know</p>
                    </div>
                </div>
            </div>
        `;
        this._element.innerHTML =`            
                <div class="row">
                    <div class="col-md-8">
                        <div data-component="news-catalog"></div>
                        <div data-component="news-viewer"></div>
                    </div>
                    <!--Sidebar-->
                    <div class="col-md-4">
                        <div data-component="sidebar" class="sidebar-outer"></div>
                    </div>
                </div>
        `;
        this.footer.innerHTML = `
            <div class="container">
            <div class="row">
                <div class="col">
                    <div class="social">
                        <div class="social__inner">
                            <a href="https://www.facebook.com/" class="social__item">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com/" class="social__item">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/" class="social__item">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/" class="social__item">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <ul class="footer-links">
                        <li>
                            <a class="footer-links__item" href="#">Sitemap</a>
                        </li>
                        <li>
                            <a class="footer-links__item" href="#">About</a>
                        </li>
                        <li>
                            <a class="footer-links__item" href="#">Need Help?</a>
                        </li>
                        <li>
                            <a class="footer-links__item" href="#">Content Guide</a>
                        </li>
                        <li>
                            <a class="footer-links__item" href="#">Gizmodo Shop</a>
                        </li>
                        <li>
                            <a class="footer-links__item" href="#">Privacy</a>
                        </li>
                        <li>
                            <a class="footer-links__item" href="#">Term of use</a>
                        </li>
                        <li>
                            <a class="footer-links__item" href="#">Advertising</a>
                        </li>
                        <li>
                            <a class="footer-links__item" href="#">Jobs</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="copyright">
                        <div class="copyright__text">Copyright © 2020 Dmitrii Voloshko. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

}