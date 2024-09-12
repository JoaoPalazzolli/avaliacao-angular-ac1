import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
import { CalculadoraIMCComponent } from './calculadora-imc/calculadora-imc.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'calcular-media', component: CalcularMediaComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'apolice-seguro', component: ApoliceSeguroComponent },
  { path: 'calculadora-imc', component: CalculadoraIMCComponent },
  { path: 'conversor-temperatura', component: ConversorTemperaturaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
