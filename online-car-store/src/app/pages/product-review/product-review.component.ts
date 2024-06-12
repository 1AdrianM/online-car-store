import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from '../../interface/IProduct';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Service/Product/product.service';
@Component({
  selector: 'app-product-review',
  standalone: true,
  imports: [],
  templateUrl: './product-review.component.html',
  styleUrl: './product-review.component.css'
})
export class ProductReviewComponent implements OnInit{
  products!: Product[] 
  id!:string;
  constructor(private ActivateRoute:ActivatedRoute, private prodServicee:ProductService){}
  
  ngOnInit(): void {
      this.ActivateRoute.params.subscribe(params=>{
        this.id = params["id"]
      },
    err=> console.log(err)
  )
}
  

}


