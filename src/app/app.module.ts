import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileReaderComponent } from './file-reader/file-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    FileReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FileReaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
