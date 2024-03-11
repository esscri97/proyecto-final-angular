import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  cantidad1 = '';
  cantidad2 = '';
  operador = '';

  agregarNumero(numero: number) {
    if (this.operador === '') {
      this.cantidad1 += numero.toString();
    } else {
      this.cantidad2 += numero.toString();
    }
  }

  setOperador(operador: string) {
    this.operador = operador;
  }

  calcular() {
    const num1 = parseFloat(this.cantidad1);
    const num2 = parseFloat(this.cantidad2);
    let resultado = 0;

    switch (this.operador) {
      case '/':
        resultado = num1 / num2;
        break;
      case 'x':
        resultado = num1 * num2;
        break;
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
    }

    this.cantidad1 = resultado.toString();
    this.cantidad2 = '';
    this.operador = '';
  }

  borrar() {
    this.cantidad1 = '';
    this.cantidad2 = '';
    this.operador = '';
  }
}
