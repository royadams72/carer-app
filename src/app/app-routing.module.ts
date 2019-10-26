import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './features/nurses/nurses.module#NursestModule' },
  { path: 'nurses', loadChildren: './features/nurses/nurses.module#NursestModule' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
