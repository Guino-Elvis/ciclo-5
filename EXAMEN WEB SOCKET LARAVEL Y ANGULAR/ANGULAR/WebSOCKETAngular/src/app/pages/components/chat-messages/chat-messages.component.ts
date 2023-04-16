import { Component, Input } from '@angular/core';
import { IMessage } from '../../../insterfaces/chat';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})

export class ChatMessagesComponent {
  @Input() messages: IMessage[] = [];
}
