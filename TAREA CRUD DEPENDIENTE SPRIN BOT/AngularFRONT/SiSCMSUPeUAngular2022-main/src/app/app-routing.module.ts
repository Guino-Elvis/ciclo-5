import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAdministradorComponent } from './list-administrador/list-administrador.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { ListProductoComponent } from './list-producto/list-producto.component';
import { CrudCategoryComponent } from './crud/crud-category/crud-category.component';
import { CrudProductoComponent } from './crud/crud-producto/crud-producto.component';

const routes: Routes = [
  {path:'',component:ListAdministradorComponent},
  // {path:'list-category',component:ListCategoryComponent},
  // {path:'list-category/add-category',component:AddCategoryComponent},
  //
  {path:'lis-producto',component:ListProductoComponent},
  {path:'add-producto',component:AddProductoComponent},

  //crd
  // {path:'crud-category',component:CrudCategoryComponent},
  {path:'crud-producto',component:CrudProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
