import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FriendsappComponent } from './friendsapp/friendsapp.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewfriendsappComponent } from './viewfriendsapp/viewfriendsapp.component';
const appRoutes:Routes=[
  {
    path:"",component:FriendsappComponent
  },
  {
    path:"view",component:ViewfriendsappComponent
  },
]
 

@NgModule({
  declarations:[
    AppComponent,
    NavbarComponent,
    FriendsappComponent,
    ViewfriendsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
