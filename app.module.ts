import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './/app-routing.module';
import { ShowComponent } from './show/show.component';
import { ActivatedRoute, Router } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ShowComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ActivatedRoute,
    Router
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
