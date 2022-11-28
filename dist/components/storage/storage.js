export class Store {
    store;
    constructor(store = 'Series') {
        this.store = store;
    }
    getStore() {
        const dataString = localStorage.getItem(this.store);
        if (!dataString)
            return [];
        return JSON.parse(dataString);
    }
    setStore(data) {
        localStorage.setItem(this.store, JSON.stringify(data));
    }
}
