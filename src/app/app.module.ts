import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FolderComponent } from './folder/folder.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import {ApiService} from './services/api.service';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    FolderComponent,
    HeaderComponent,
    MainComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule.forRoot(),
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
