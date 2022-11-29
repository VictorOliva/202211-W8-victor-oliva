import { ListOfAllSeries, SERIES } from '../../models/series.js';
import { Component } from '../component/component.js';

export class SeriesListPending extends Component {
    series!: Array<ListOfAllSeries>;
    template!: string;
    constructor(public selector: string) {
        super();
        this.series = [...SERIES];
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
    }

    createTemplate() {
        let template = `
    <section class="series-pending">
        <h3 class="subsection-title">Pending series</h3>
        <p class="info">You have these series pending to watch</p>
        <ul class="series-list">`;
        this.series.forEach((item: ListOfAllSeries) => {
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
}

export class SeriesListWatched extends Component {
    series!: Array<ListOfAllSeries>;
    templateWatched!: string;
    constructor(public selector: string) {
        super();
        this.series = [...SERIES];
        this.manageComponent();
    }
    manageComponent() {
        this.templateWatched = this.createTemplateWatched();
        this.renderAdd(this.selector, this.templateWatched);
    }

    createTemplateWatched() {
        let templateWatched = `
    <section class="series-watched">
        <h3 class="subsection-title">Watched series</h3>
        <p class="info">You have these series watched</p>
        <ul class="series-list">`;
        this.series.forEach((item: ListOfAllSeries) => {
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
}
