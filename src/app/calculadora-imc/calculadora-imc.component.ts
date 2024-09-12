import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-imc',
  templateUrl: './calculadora-imc.component.html',
  styleUrl: './calculadora-imc.component.css'
})
export class CalculadoraIMCComponent {
  peso : number = 0;
  altura : number = 0;
  imc : number = 0;
  status : string = "";

  calcularIMC(){
    this.imc = this.peso / (Math.pow(this.altura, 2));

    if(this.imc < 18.5){
      this.status = "Abaixo do peso";
    } else if(this.imc >= 18.5 && this.imc <= 24.9){
      this.status = "Peso normal";
    } else if(this.imc >= 25 && this.imc <= 29.9){
      this.status = "Sobrepeso";
    } else if(this.imc >= 30 && this.imc <= 34.9){
      this.status = "Obesidade grau I";
    } else if(this.imc >= 35 && this.imc <= 39.9){
      this.status = "Obesidade grau II";
    } else{
      this.status = "Obesidade grau III";
    }
  }
}
