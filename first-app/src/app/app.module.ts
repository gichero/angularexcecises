import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComptwoComponent } from './comptwo/comptwo.component';
import { CompthreeComponent } from './comptwo/compthree.component';
import { CompfourComponent } from './comptwo/compfour.component';

@NgModule({
  declarations: [
    AppComponent,
    ComptwoComponent,
    CompthreeComponent,
    CompfourComponent,
    CompthreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
