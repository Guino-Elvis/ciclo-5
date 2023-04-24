import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListCategoryComponent } from './list-category/list-category.component';

import {HttpClientModule} from '@angular/common/http';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { FormsModule } from '@angular/forms';
import { ListProductoComponent } from './list-producto/list-producto.component';
import { EditProductoComponent } from './edit-producto/edit-producto.component';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { ListAdministradorComponent } from './list-administrador/list-administrador.component';
import { IndexADminComponent } from './ADMINComponent/index-admin/index-admin.component';
import { CrudCategoryComponent } from './crud/crud-category/crud-category.component';
import { CrudProductoComponent } from './crud/crud-producto/crud-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    ListUserComponent,
    EditUserComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ListProductoComponent,
    EditProductoComponent,
    AddProductoComponent,
    ListAdministradorComponent,
    IndexADminComponent,
    CrudCategoryComponent,
    CrudProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
