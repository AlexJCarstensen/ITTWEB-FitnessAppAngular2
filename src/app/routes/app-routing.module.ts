import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkoutsComponent }      from '../workouts/workouts.component';
import { ExercisesComponent } from '../exercises/exercises.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'workouts',     component: WorkoutsComponent },
  { path: 'exercises',  component: ExercisesComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
