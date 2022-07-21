import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';

const routes: Routes = [
  {
    path: '',
    component: ListRestoComponent
  },
  {
    path: 'add',
    component: AddRestoComponent
  },
  {
    path: 'update/:id',
    component: UpdateRestoComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
