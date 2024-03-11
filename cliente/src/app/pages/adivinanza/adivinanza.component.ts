import { Component } from '@angular/core';

@Component({
  selector: 'app-adivina-numero',
  templateUrl: './adivinanza.component.html',
  styleUrls: ['./adivinanza.component.css']
})
export class AdivinanzaComponent {
  numeroAzar = Math.floor(Math.random() * 100 + 1);
  numeroIngresado: number = 0;
  mensaje: string = '';
  contador = 0;

  actualizarNumeroIngresado(event: any) {
    this.numeroIngresado = event.target.value;
  }
  comprobar() {
    if (isNaN(this.numeroIngresado) || this.numeroIngresado < 1 || this.numeroIngresado > 100) {
      this.mensaje = 'Por favor, ingresa un número entre 1 y 100';
      return;
    }

    if (this.numeroIngresado === this.numeroAzar) {
      this.mensaje = `¡ENHORABUENA, EL NÚMERO ERA ${this.numeroAzar}!`;
    } else if (this.numeroIngresado < this.numeroAzar) {
      this.mensaje = `El número es mayor. Prueba otra vez`;
      this.contador++;
    } else {
      this.mensaje = `El número es menor. Prueba otra vez`;
      this.contador++;
    }
  }
}
