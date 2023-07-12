import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JitsiComponent } from './jitsi-component/jitsi-component.component';
import { JitsiExternoComponent } from './jitsi-externo/jitsi-externo.component';

@NgModule({
  declarations: [
    AppComponent,
    JitsiComponent,
    JitsiExternoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
