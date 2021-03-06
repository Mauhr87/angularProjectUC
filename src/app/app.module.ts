import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GifsComponent } from './gifs/gifs.component';
import { StickersComponent } from './stickers/stickers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';

import { HttpClientModule} from "@angular/common/http";
import { GcardComponent } from './gcard/gcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GifsComponent,
    StickersComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    GcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
