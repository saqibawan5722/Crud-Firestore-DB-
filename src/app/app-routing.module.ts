import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full', },
  { path: 'create', canActivate:[AuthGuard],  component:CreateUserComponent,},
  { path: 'list-users', component: ListUserComponent , },
  { path: 'update-user/:id', component: EditUserComponent , }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
