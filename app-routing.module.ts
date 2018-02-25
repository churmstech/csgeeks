import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent }      from './user/user.component';
import { ShowComponent }      from './show/show.component';


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'show', component: ShowComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}