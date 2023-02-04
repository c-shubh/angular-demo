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

  todos = this.todoService.todoList;

  constructor(
    private formBuilder: FormBuilder,
    public todoService: TodoService
  ) {}

  ngOnInit() {
    this.controlsForm.valueChanges.subscribe(<any>this.onControlChange);
  }

  onControlChange = (val: TodoListControls) => {
    switch (val.control) {
      case 'all':
        this.todos = this.todoService.todoList;
        break;
      case 'completed':
        this.todos = this.todoService.todoList.filter((todo) => todo.completed);
        break;
      case 'not-completed':
        this.todos = this.todoService.todoList.filter(
          (todo) => !todo.completed
        );
        break;
    }
  };

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  onSubmit() {
    this.todoService.add(this.todoForm.value.title!);
    this.todoForm.reset();
  }
}
