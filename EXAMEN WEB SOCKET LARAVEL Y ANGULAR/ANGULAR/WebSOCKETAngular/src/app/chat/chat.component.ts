import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';
import { environment } from './../../environments/environment.prod';
import { IMessage, IUser } from '../insterfaces/chat';

// import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

//  export class ChatComponent implements OnInit {
//    echo: Echo;
//   userList:IUser[] = [];
//   messages: IMessage[] = [];
//  constructor(){
//     this.echo =new Echo({

//       broadcaster: 'Pusher',
//        key: environment.pusher_key,
//       wsHost: environment.pusher_host,
//      cluster:environment.pusher_cluster,
//  forceTLS: true,
// authEndpoint: `${ environment.urlBase}/broadcasting/auth `,
// auth:{
//  headers:{
//     accept:'application/json',
//    Authorization: `Bearer ${localStorage.getItem('token')} `
//  }
// },
//     wsPort: 6001,
//      disableStats: true,
//      enabledTransports: ['ws'],
//     //  forceTLS: true,
//    });
//     console.log(this.echo); // Agregar este console.log()
//   }

// ngOnInit(): void {
// if (this.echo) {
//     this.echo.channel('chat-room')
//   .listen('ChatEvent', (resp: any)=>{
//      console.log(resp);
//    });

//   this.echo.join(`chat-room`)
//    .here((users: any)=>{
//      console.log(users);
//     })
//      .joining((user: any)=>{
//      console.log(user.name);
//    })
//   .leaving((user: any)=>{
//     console.log(user.name);
//   });
//    }
// }
//  }
  // ngOnInit(): void {
  //   this.echo.private('channel-chat')
  //       .listen('ChatEvent', (resp : any) => {
  //         const message: IMessage = {
  //           message: resp.message,
  //           me: false,
  //           from: resp.from
  //         };
  //         this.messages.push(message);
  //       });

  //   this.echo.join(`channel-chat`)
  //   .here((users: any) => {
  //     this.userList = users;
  //   })
  //   .joining((user : any) => {
  //       this.userList.push(user);
  //   })
  //   .leaving((user : any) => {
  //       this.userList = this.userList.filter((userL) => {
  //         return user.id !== userL.id;
  //       });
  //   });
  // }











// export class ChatComponent implements OnInit {
//   // echo:Echo;
//   constructor(){
//     // this.echo =new Echo({
//     //   broadcaster: 'pusher',
//     //    key: environment.pusher_key,
//     //   wsHost: environment.pusher_host,
//     //  cluster:environment.pusher_cluster,
//     //   authEndpoint: `${ environment.urlBase}/api/broadcasting/auth `,
//     //   auth:{
//     //     headers:{
//     //       accept:'application/json',
//     //       Authorization: `Bearer ${localStorage.getItem('token')} `
//     //     }
//     //   },
//     //   wsPort: 6001,
//     //   disableStats: true,
//     //   enabledTransports: ['ws'],
//     //   forceTLS: true
//     // });
//   }

//   ngOnInit(): void {

// // this.echo.private('channel-chat')
// // .listen('ChatEvent', (resp: any)=>{
// //   console.log(resp);
// // })


//   }


// }






 export class ChatComponent implements OnInit {
  userList: any[] = [];

  pusher: any;
  chatChannel: any;

   ngOnInit(): void {
    this.pusher = new Pusher(environment.pusher_key, {
     cluster: environment.pusher_cluster,
      // encrypted: true // o false si tu servidor Pusher no admite conexiones seguras
    });

    this.chatChannel = this.pusher.subscribe('chat-room');
    this.chatChannel.bind('ChatEvent', (data: any) => {
      console.log(data);
   });
    this.chatChannel.bind('pusher:subscription_succeeded', (users: any[]) => {
     this.userList = users;
     console.log(this.userList);
    });

   this.chatChannel.bind('pusher:member_added', (member: any) => {
     this.userList.push(member.info);
      console.log(member.info.name + ' se ha unido al chat');
    });

    this.chatChannel.bind('pusher:member_removed', (member: any) => {
     this.userList = this.userList.filter((user: any) => user.id !== member.info.id);
     console.log(member.info.name + ' ha abandonado el chat');
    });
 }
 }








// @Component({
//   selector: 'app-chat',
//   templateUrl: './chat.component.html',
//   styleUrls: ['./chat.component.css']
// })






//  export class ChatComponent implements OnInit {
//   userList: any[] = [];

//  pusher: any;
//   chatChannel: any;

//   ngOnInit(): void {
//    this.pusher = new Pusher('123456', {
//       cluster: 'mt1',
//      // encrypted: true // o false si tu servidor Pusher no admite conexiones seguras
//     });

//     this.chatChannel = this.pusher.subscribe('chat-room');
//     this.chatChannel.bind('ChatEvent', (data: any) => {
//      console.log(data);
//    });

//   }
//   }
