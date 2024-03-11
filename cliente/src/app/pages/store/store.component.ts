import { Component, inject } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-store',
  standalone: true,
  imports: [],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent{
  productos: any[] = [];
  productos$ = this._productosService.getAllProducts();
  private subscription: Subscription = new Subscription;

  constructor(private _productosService: StoreService) {}

  ngOnInit() {
    this.subscription = this.productos$.subscribe((data) => {
      this.productos = data.map(this._productosService.procesarProductos);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
