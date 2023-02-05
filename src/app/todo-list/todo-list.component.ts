import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo, TodoListControls } from '../types';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todoForm = this.formBuilder.group<Pick<Todo, 'title'>>({
    title: '',
  });

  controlsForm = this.formBuilder.group<TodoListControls>({
    control: 'all',
  });

  todos: Todo[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public todoService: TodoService
  ) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  filter(todos: Todo[]) {
    switch (this.controlsForm.value.control) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'not-completed':
        return todos.filter((todo) => !todo.completed);
    }
    return todos;
  }

  toggleTodo(id: Todo['id']) {
    this.todoService.toggle(id);
  }

  onSubmit() {
    this.todoService.add(this.todoForm.value.title!);
    this.todoForm.reset();
  }

  onDelete(id: Todo['id']) {
    this.todoService.delete(id);
    this.getTodos();
  }
}
