export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoListControls {
  control: 'all' | 'completed' | 'not-completed';
}
