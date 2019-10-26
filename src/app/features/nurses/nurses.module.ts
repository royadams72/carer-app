import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { NursesComponent } from './nurses.component';
import { AngularFirestore } from '@angular/fire/firestore';

const routes: Routes = [
  {
    path: '',
    component: NursesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NursesComponent]
})
export class NursestModule {}
