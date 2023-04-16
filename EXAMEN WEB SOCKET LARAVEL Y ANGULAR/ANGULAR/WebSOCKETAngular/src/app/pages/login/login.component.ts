import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Pusher from 'pusher-js';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  formulario!: FormGroup;
  constructor(private authService:AuthService,
        private router:Router){}
  ngOnInit():void{
   this.formulario = new FormGroup({
    email:new FormControl(null,Validators.required),
    password: new FormControl(null, Validators.required)
   });
  }

  login(){
    this.authService.sendLogin(this.formulario.value)
//  this.authService.sendLogin({ data: this.formulario.value })
 .subscribe( (resp: any)=>{
  localStorage.setItem('token',resp.token);
  localStorage.setItem('user',JSON.stringify(resp.user));
 this.router.navigate(['chat']);
 });
  }
}
