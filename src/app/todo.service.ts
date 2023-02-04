import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './types';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: Todo[] = [
    {
      id: uuidv4(),
      title: 'Pay semester exam fees',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Prepare for GDSC workshop',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'NPTEL week 1 assignment',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Learn more about Google Solution Challenge',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Learn Java Multithreading',
      completed: false,
    },
  ];

  constructor() {}

  add(title: Todo['title']) {
    this.todoList.push({
      id: uuidv4(),
      completed: false,
      title: title,
    });
  }
}
