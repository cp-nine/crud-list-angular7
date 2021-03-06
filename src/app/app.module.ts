import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { TopheroesComponent } from './components/topheroes/topheroes.component';
import { HighlightDirective } from './highlight.directive';
import { SampleService } from './services/sample.service';
import { SampleComponent } from './components/sample/sample.component';
import { SampleformComponent } from './components/sampleform/sampleform.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RupiahPipe } from './pipes/rupiah.pipe';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    HeroeComponent,
    TopheroesComponent,
    HighlightDirective,
    SampleComponent,
    SampleformComponent,
    PipesComponent,
    RupiahPipe,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SampleService,
    RupiahPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
