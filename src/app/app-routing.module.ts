import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsPageComponent } from './students-page/students-page.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'StudentPage',component:StudentsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
