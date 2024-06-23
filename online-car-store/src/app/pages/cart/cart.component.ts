import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../interface/IProduct';
import { ProductService } from '../../Service/Product/product.service';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../Service/Alert/alert.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
Products_cart: Product[] = [];
total:  number = 0;
private productService = inject(ProductService);
private alert =  inject(AlertService);
ngOnInit(): void {
    this.Products_cart= this.productService.GetCartList()
  this.CalculateTotal() 
  }
   CalculateTotal():void{
this.total=  this.Products_cart.reduce((total,product)=>{

  return total +(product.price*(product.Quantity||1))
},0)
   }
IncreaseQuantity(product:Product): void{
  if(product.Quantity){

    product.Quantity++;
  }
}
DecreaseQuantity(product:Product):void{
  if(product.Quantity> 1){
    product.Quantity--;
  }
}
RemoveProduct(product: Product){
if(this.Products_cart){
  this.alert.QuestionAlert("Removiendo Producto","Estas Seguro que Quieres eliminar este Producto de tu Carrito", "Si","Cancelar")
this.Products_cart= this.Products_cart.filter(p=> p != product)
}}
Purchase():boolean{
  if(this.Products_cart){
this.alert.SuccessAlert("PAGO ADMINISTRADO", "Su pago ha sido realizado")
this.Products_cart=[]
}
return  false;}
}
