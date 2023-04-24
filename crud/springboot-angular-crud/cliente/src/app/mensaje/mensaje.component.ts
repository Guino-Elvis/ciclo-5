import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'app/models/mensaje';
import { MensajeService } from 'app/servicio/mensaje.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css'],
})
export class MensajeComponent implements OnInit {
  constructor(public mensajeService: MensajeService) {}

  ngOnInit(): void {}
}
