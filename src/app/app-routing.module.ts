import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const title = 'Demo app';
const routes: Routes = [
  { path: '', component: HomeComponent, title: `Home | ${title}` },
  { path: 'login', component: LoginComponent, title: `Login | ${title}` },
  {
    path: 'todo-list',
    component: TodoListComponent,
    title: `Todo List | ${title}`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
