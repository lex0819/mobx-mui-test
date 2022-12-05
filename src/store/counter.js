import { makeAutoObservable } from 'mobx';

class Counter {
  counter = 0;
  prices = [
    { id: 1, name: 'soap', price: 5 },
    { id: 2, name: 'pomade', price: 7 },
    { id: 3, name: 'cream', price: 9 },
  ];
  constructor() {
    makeAutoObservable(this);
  }
  increment() {
    this.counter = this.counter + 1;
    // console.log('increment', this.counter);
  }
  decrement() {
    this.counter = this.counter - 1;
    // console.log('decrement', this.counter);
  }
  randomNumber() {
    this.counter = Math.floor(Math.random() * 1000);
  }

  setPrice(id, number) {
    this.prices.find((item) => item.id === id).price = number;
  }

  get total() {
    return (
      this.prices.reduce((sum, elem) => {
        return sum + elem.price;
      }, 0) + this.counter
    );
  }
}
export default new Counter();
