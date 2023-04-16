import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/insterfaces/chat';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

@Input() userList:IUser[]=[];
constructor(){}

ngOnInit(): void {

}
}
