import Component from "../../component.js";

export default class Sidebar extends Component{
    constructor({ element }) {
        super({ element });
        this._element = element;

        this._render();
    }

    _render() {
        this._element.innerHTML = `
            <aside class="sidebar">
                <div class="sidebar__text"><b class="text-black">You</b> may also like</div>
                <div class="sidebar__item">
                    <ul class="sidebar__photos">
                        <li>
                            <img src="https://via.placeholder.com/150x100" class="sidebar__small-img" alt="">
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/150x100" class="sidebar__small-img" alt="">
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/150x100" class="sidebar__small-img" alt="">
                        </li>
                    </ul>
                    <img class="sidebar__big-img" src="https://via.placeholder.com/470x250" alt="">
                    <div class="sidebar__content">
                        <div class="sidebar__title">One Week-Old Tesla Model X Has Catastrophic Suspension
                            Failure And The Resulting Twitter Feed
                            Is As Bad As You'd Think</div>
                        <div class="sidebar__author">
                            Jason Lanson
                            <span class="sidebar__post-time">Yesterday 7:00PM</span>
                        </div>
                    </div>
                </div>
            </aside>
        `;
    }
}