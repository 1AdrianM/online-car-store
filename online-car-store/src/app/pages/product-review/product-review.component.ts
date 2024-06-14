import { Component, inject, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from '../../interface/IProduct';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../Service/Product/product.service';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../Service/Alert/alert.service';
@Component({
  selector: 'app-product-review',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-review.component.html',
  styleUrl: './product-review.component.css'
})
export class ProductReviewComponent implements OnInit{
  product: Product | undefined;
  id!: any;
  constructor(private ActivateRoute:ActivatedRoute, private prodServicee:ProductService,  private route: Router) {

  } 
  private alertService = inject(AlertService);
  ngOnInit(): void {
      this.ActivateRoute.params.subscribe(params=>{
        this.id = params["id"]
        this.product =  this.prodServicee.GetProductById(this.id)

      },
    err=> console.log(err)
  )

}
@Input()
AddProduct()
{  if(this.product){
this.product.Bought = true;
this.alertService.SuccessAlert("Añadido","Producto Añadido al Carrito")
 this.route.navigate(["/products"])

}
}  

}


