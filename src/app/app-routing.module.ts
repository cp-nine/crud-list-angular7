import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopheroesComponent} from './components/topheroes/topheroes.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import { SampleComponent } from './components/sample/sample.component';
import { SampleformComponent } from './components/sampleform/sampleform.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: TopheroesComponent },
  { path: 'heroes', component: HeroeComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'pipes/:balance', component: PipesComponent },
  { path: 'sample', component: SampleComponent },
  { path: 'formvalidation', component: SampleformComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
