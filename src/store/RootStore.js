import Counter from './counter';
import Todo from './todo';

class RootStore {
  constructor() {
    this.storage = window.localStorage; //localStorage in user's browser

    this.counter = new Counter(this); //create object and add relation beetwen all other stores
    this.todo = new Todo(this); //create object and add relation beetwen all other stores
  }
}

export default new RootStore();

/**
 * all abjects which are into constractor will be accessed for other modules as
 * RootStore.storage._method/value - see MSDN docs
 * RootStore.counter._method/value - see counter.js
 * RootStore.todo._method/value - see todo.js
 *
 * mobx is not needed here because it called in all subStores
 */
