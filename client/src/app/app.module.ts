import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { HotelsComponent } from './hotels/hotels.component';
import { DestinationComponent } from './destination/destination.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    OnewaybindingComponent,
    TwowaybindingComponent,
    SignUpComponent,
    ContactComponent,
    HotelsComponent,
    DestinationComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
