import { SERIES } from '../../models/series.js';
import { Component } from '../component/component.js';
export class SeriesListPending extends Component {
    selector;
    series;
    template;
    constructor(selector) {
        super();
        this.selector = selector;
        this.series = [...SERIES];
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        setTimeout(() => {
            document
                .querySelectorAll('.icon--delete')
                .forEach((item) => item.addEventListener('click', this.handlerEraser.bind(this)));
        }, 100);
    }
    createTemplate() {
        let template = `
    <section class="series-pending">
        <h3 class="subsection-title">Pending series</h3>
        <p class="info">You have these series pending to watch</p>
        <ul class="series-list">`;
        this.series.forEach((item) => {
            if (!item.watched) {
                template += `
      <li class="serie">
            <img
              class="serie__poster"
              src="${item.poster}"
              alt="${item.name} poster"
            />
            <h4 class="serie__title">${item.name}</h4>
            <p class="serie__info">${item.creator} (${item.year})</p>
            <ul class="score">
              <li class="score__star" id=${item.id}>
                <i class="icon--score fas fa-star" title="1/5"></i>
              </li>
              <li class="score__star" id=${item.id}>
                <i class="icon--score fas fa-star" title="2/5"></i>
              </li>
              <li class="score__star" id=${item.id}>
                <i class="icon--score fas fa-star" title="3/5"></i>
              </li>
              <li class="score__star" id=${item.id}>
                <i class="icon--score fas fa-star" title="4/5"></i>
              </li>
              <li class="score__star" id=${item.id}>
                <i class="icon--score fas fa-star" title="5/5"></i>
              </li>
            </ul>
            <i class="fas fa-times-circle icon--delete" id=${item.id}></i>
          </li>`;
            }
        });
        template += `
    </ul>
      </section>`;
        return template;
    }
    handlerEraser(ev) {
        const deletedSerie = ev.target.id;
        this.series = this.series.filter((item) => item.id !== +deletedSerie);
        this.manageComponent();
    }
}
export class SeriesListWatched extends Component {
    selector;
    series;
    templateWatched;
    constructor(selector) {
        super();
        this.selector = selector;
        this.series = [...SERIES];
        this.manageComponent();
    }
    manageComponent() {
        this.templateWatched = this.createTemplateWatched();
        this.renderAdd(this.selector, this.templateWatched);
        setTimeout(() => {
            document
                .querySelectorAll('.icon--delete')
                .forEach((item) => item.addEventListener('click', this.handlerEraser.bind(this)));
        }, 100);
    }
    createTemplateWatched() {
        let templateWatched = `
    <section class="series-watched">
        <h3 class="subsection-title">Watched series</h3>
        <p class="info">You have these series watched</p>
        <ul class="series-list">`;
        this.series.forEach((item) => {
            if (item.watched) {
                templateWatched += `
      <li class="serie">
            <img
              class="serie__poster"
              src="${item.poster}"
              alt="${item.name} poster"
            />
            <h4 class="serie__title">${item.name}</h4>
            <p class="serie__info">${item.creator} (${item.year})</p>
            <ul class="score">
              <li class="score__star" id=${item.id}>
                <i class="icon--score fas fa-star" title="1/5"></i>
              </li>
              <li class="score__star" id=${item.id}>
                <i class="icon--score fas fa-star" title="2/5"></i>
              </li>
              <li class="score__star" id=${item.id}>
                <i class="icon--score fas fa-star" title="3/5"></i>
              </li>
              <li class="score__star" id=${item.id}>
                <i class="icon--score fas fa-star" title="4/5"></i>
              </li>
              <li class="score__star" id=${item.id}>
                <i class="icon--score fas fa-star" title="5/5"></i>
              </li>
            </ul>
            <i class="fas fa-times-circle icon--delete" id=${item.id}></i>
          </li>`;
            }
        });
        templateWatched += `
    </ul>
      </section>`;
        return templateWatched;
    }
    handlerEraser(ev) {
        const deletedSerie = ev.target.id;
        this.series = this.series.filter((item) => item.id !== +deletedSerie);
        this.manageComponent();
    }
}
