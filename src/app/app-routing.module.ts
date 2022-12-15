import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './app/calculator/calculator.component';
import { NotFoundComponent } from './app/shared/error/not-found/not-found.component';

const routes: Routes = [
  { 
    path: '', 
    component: CalculatorComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
