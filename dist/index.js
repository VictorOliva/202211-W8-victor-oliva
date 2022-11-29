import { SeriesListPending } from './components/series.list/serieslist.js';
import { SeriesListWatched } from './components/series.list/serieslist.js';
(() => {
    new SeriesListPending('.series');
    new SeriesListWatched('.series');
})();
