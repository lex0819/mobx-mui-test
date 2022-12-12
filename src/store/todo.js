import { makeAutoObservable } from 'mobx';
class Todo {
  todos = [
    {
      id: -2,
      title: 'To kiss my hedgehog',
      completed: true,
    },
    {
      id: -1,
      title: 'To cook dinner for him',
      completed: false,
    },
  ];
  isLoaded = false;
  constructor() {
    makeAutoObservable(this);
  }
  addTodo(todo) {
    this.todos.push(todo);
  }
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => id !== todo.id);
  }
  completeTodo(id) {
    this.todos.find((todo) => id === todo.id).completed = !this.todos.find(
      (todo) => id === todo.id
    ).completed;
  }
  get countCompletedTodos() {
    return this.todos.filter((todo) => todo.completed === true).length;
  }
  fetchTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => {
        this.todos = [...this.todos, ...json];
      })
      .catch((er) => console.log(er.message))
      .finally(() => (this.isLoaded = true));
  }
}
export default Todo;
