import { Component, OnInit } from '@angular/core';
import { initializeJitsi } from './../../jitsi-config';

@Component({
  selector: 'app-jitsi-component',
  templateUrl: './jitsi-component.component.html',
  styleUrls: ['./jitsi-component.component.css']
})
export class JitsiComponent implements OnInit {

  constructor(){}

  ngOnInit() {
    const apiConfig = {
      roomName: 'jsabnjsdcjsdndj',
    };

    initializeJitsi(apiConfig, apiConfig.roomName)
      .then(iframe => {
        console.log('¡Jitsi Meet cargado con éxito!');
        // Haz algo con el iframe de Jitsi Meet, si es necesario
      })
      .catch(error => {
        console.error('Error al cargar Jitsi Meet:', error);
      });
  }
}
