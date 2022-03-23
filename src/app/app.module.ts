import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterComponent } from './characters/character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { HomepageComponent } from './homePage/homepage.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './componets/navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharactersComponent,
    HomepageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: 'character', component: CharactersComponent },
      { path: '', component: HomepageComponent, }

    ])
  ],
  providers: [
    HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
