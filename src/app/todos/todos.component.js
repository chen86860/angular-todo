"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TodosComponent = (function () {
    function TodosComponent(_todoService) {
        this._todoService = _todoService;
        this.id = 1;
        this.appState = 'default';
    }
    TodosComponent.prototype.ngOnInit = function () {
        this.todos = this._todoService.getTodos();
        this.id = this.todos[this.todos.length - 1].id || 1;
    };
    TodosComponent.prototype.addTodo = function () {
        var newTodo = {
            id: this.id + 1,
            text: this.text
        };
        this.id += 1;
        this.todos.push(newTodo);
        this._todoService.addTodo(newTodo);
    };
    TodosComponent.prototype.delTodo = function (todo) {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === todo.id) {
                this.todos.splice(i, 1);
            }
        }
        this._todoService.delTodo(todo.id);
    };
    TodosComponent.prototype.editTodo = function (todo) {
        this.appState = 'edit';
        this.text = todo.text;
        this.oldID = todo.id;
    };
    TodosComponent.prototype.updateTodo = function () {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == this.oldID) {
                this.todos[i].text = this.text;
            }
        }
        this._todoService.updateTodo(this.oldID, this.text);
    };
    TodosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-todos',
            templateUrl: 'todos.component.html',
            styleUrls: ['todos.component.css']
        })
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map