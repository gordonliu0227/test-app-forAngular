import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {DataService} from './data.service'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
