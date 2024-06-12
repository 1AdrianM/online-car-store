import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../../interface/IProduct';
import { ProductService } from '../../Service/Product/product.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
products: Product[]

constructor(private productService: ProductService, private router: Router) {
  this.products = this.productService.GetProduct();
}

}