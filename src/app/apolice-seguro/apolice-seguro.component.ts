import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrl: './apolice-seguro.component.css'
})
export class ApoliceSeguroComponent {
  nome : string = "";
  sexo : string = "";
  idade : number = 0;
  valorAutomovel : number = 0;

  valorApolice : number = 0;

  calcularApolice(){
      if (this.sexo == "masculino" && this.idade <= 25){
        this.valorApolice = this.valorAutomovel * 0.15;
      } else if (this.sexo == "masculino" && this.idade > 25){
        this.valorApolice = this.valorAutomovel * 0.1;
      } else{
        this.valorApolice = this.valorAutomovel * 0.08;
      }
  }
}
