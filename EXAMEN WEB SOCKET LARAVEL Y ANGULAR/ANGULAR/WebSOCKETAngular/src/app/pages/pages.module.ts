import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from '../chat/chat.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ChatMessagesComponent } from './components/chat-messages/chat-messages.component';



@NgModule({
  declarations: [
    LoginComponent,
    ChatComponent,
    UserListComponent,
    ChatMessagesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
