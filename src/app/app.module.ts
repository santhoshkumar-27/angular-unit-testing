import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StrengthPipe } from './pipe/strength/strength.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StrengthPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
