import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { Todo } from './types';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private TODO_STORE = 'todoStore';
  private todos: Todo[] = this.getTodosObj();

  constructor(private localStorageService: LocalStorageService) {}

  private getTodosObj() {
    const todos: Todo[] = this.localStorageService.getItem(this.TODO_STORE);
    if (todos) return todos;
    return [];
  }

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  add(title: Todo['title']) {
    this.todos.push({
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    });
    this.save();
  }

  delete(id: Todo['id']) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.save();
  }

  toggle(id: Todo['id']) {
    const requiredTodo = this.todos.find((todo) => todo.id === id)!;
    requiredTodo.completed = !requiredTodo.completed;
    this.save();
  }

  private save() {
    this.localStorageService.setItem(this.TODO_STORE, this.todos);
  }
}
