import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  // Variable para almacenar la búsqueda del usuario
  search: string = '';
  // Inyectamos el servicio Router en el constructor
  constructor(private router: Router) { }
  // Método para buscar y navegar a la página correspondiente
  buscar() {
    switch (this.search.toLowerCase()) {
      case 'adivinanza':
        this.router.navigate(['/adivinanza']);
        break;
      case 'clima':
        this.router.navigate(['/clima']);
        break;
      case 'tienda':
        this.router.navigate(['/tienda']);
        break;
      case 'dog':
        this.router.navigate(['/dog']);
        break;
      case 'users':
        this.router.navigate(['/users']);
        break;
      case 'calculadora':
        this.router.navigate(['/calculadora']);
        break;
      case 'store':
        this.router.navigate(['/store']);
        break;
      default:
        this.router.navigate(['/home']);
    }
  }

}
