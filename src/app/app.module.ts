import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FolderComponent } from './folder/folder.component';
import { FooderComponent } from './fooder/fooder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FolderComponent,
    FooderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
