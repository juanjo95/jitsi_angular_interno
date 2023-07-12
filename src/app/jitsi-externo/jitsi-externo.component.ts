import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jitsi-externo',
  templateUrl: './jitsi-externo.component.html',
  styleUrls: ['./jitsi-externo.component.css']
})
export class JitsiExternoComponent implements OnInit {

  sala:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  openJitsi() {
    const roomName = 'jsabnjsdcjsdndj'; // Reemplaza jsabnjsdcjsdndj con el nombre de tu sala de Jitsi
    const displayName = 'juan'; // Reemplaza juan con el nombre del moderador

    const url = `https://meet.jit.si/${roomName}#userInfo.displayName=${displayName}`;
    window.open(url, '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=800,height=600');
  }

}
