import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopheroesComponent} from './components/topheroes/topheroes.component';
import {HeroeComponent} from './components/heroe/heroe.component';

const routes: Routes = [
  { path: '', component: TopheroesComponent },
  { path: 'heroes', component: HeroeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
