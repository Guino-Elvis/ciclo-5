import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../servicio/mensaje.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css'],
})
export class MensajeComponent implements OnInit {
  constructor(public mensajeService: MensajeService) {}

  ngOnInit(): void {}
}
