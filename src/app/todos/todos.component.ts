import {Component, OnInit} from '@angular/core';
import  {TodoService} from '../todo.service'
@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {
  id = 1;
  oldID;
  text;
  appState = 'default';
  todos;

  constructor(private _todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
    this.id = this.todos[this.todos.length - 1].id || 1;
  }

  addTodo() {
    var newTodo = {
      id: this.id + 1,
      text: this.text
    };

    this.id += 1;
    this.todos.push(newTodo);
    this._todoService.addTodo(newTodo)
  }

  delTodo(todo) {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === todo.id) {
        this.todos.splice(i, 1)
      }
    }
    this._todoService.delTodo(todo.id);
  }

  editTodo(todo) {
    this.appState = 'edit';
    this.text = todo.text;
    this.oldID = todo.id;
  }

  updateTodo() {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == this.oldID) {
        this.todos[i].text = this.text;
      }
    }
    this._todoService.updateTodo(this.oldID, this.text);
  }
}
