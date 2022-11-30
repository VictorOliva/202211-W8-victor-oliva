import { SeriesListPending } from './mock/serieslist.js';
import { SeriesListWatched } from './mock/serieslist.js';

(() => {
    new SeriesListPending('.series');
    new SeriesListWatched('.series');
})();
