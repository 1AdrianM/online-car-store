import { Injectable } from '@angular/core';
import { Product } from '../../interface/IProduct';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

   private products: Product[] = [{
     id: "1",
     image: "assets/images/gt86.webp",
     Brand: "Toyota",
     Model: "GT86",
     description: "This Beautiful Car",
     Bought: false,

     price: 30000,
     type: 'Coupee',
     Quantity: 1,
     AddedToCart: false
   }, {
     id: "2",
     image: 'assets/images/bmw-m5.jpg',
     Brand: "BMW",
     Model: "M5",
     description: 'Luxury sedan',
     Bought: true,
     price: 80000,
     type: 'Coupee/Sports',
     Quantity: 1,
     AddedToCart: true
   }, {
      id: "3",
      image: 'assets/images/camry.webp',
      Brand: "Toyota",
      Model: "Camry",
      description: 'Reliable family car',
      Bought: false,
      price: 25000,
      type: 'Sedan',
      Quantity: 2,
      AddedToCart: false
    }, {
      id: "4",
      image: 'assets/images/ford-mustang.jpg',
      Brand: "Ford",
      Model: "Mustang",
      description: 'Classic American muscle car',
      Bought: false,
      price: 55000,
      type: 'Coupee/Muscle-Car',
      Quantity: 1,
      AddedToCart: false
    }, {
      id: "5",
      image: 'assets/images/Audia4.jpg',
      Brand: "Audi",
      Model: "A4",
      description: 'Compact executive car',
      Bought: false,
      price: 40000,
      type: 'Luxury/Sedan',
      Quantity: 1,
      AddedToCart: false
    }, {
      id: "6",
      image: 'assets/images/civic-typer.jpg',
      Brand: "Honda",
      Model: "Civic  Type-R",
      description: 'Popular compact car',
      Bought: false,
      price: 22000,
      type: 'Sedan/Sports',
      Quantity: 1,
      AddedToCart: false
    }, {
      id: "7",
      image: 'assets/images/e-class.jpg',
      Brand: "Mercedes-Benz",
      Model: "E-Class",
      description: 'Luxurious and stylish',
      Bought: false,
      price: 70000,
      type: 'Luxury/Sedan',
      Quantity: 1,
      AddedToCart: false
    }, {
      id: "8",
      image: 'assets/images/tesla-model3.jpg',
      Brand: "Tesla",
      Model: "Model 3",
      description: 'Innovative electric car',
      Bought: false,
      price: 50000,
      type: 'Electric Sedan',
      Quantity: 1,
      AddedToCart: false
    }, {
      id: "9",
      image: 'assets/images/camaro-chev.jpg',
      Brand: "Chevrolet",
      Model: "Camaro",
      description: 'Sporty and powerful',
      Bought: false,
      price: 45000,
      type: 'Coupee/Muscle-Car',
      Quantity: 1,
      AddedToCart: false
    }, {
      id: "10",
      image: 'assets/images/golf-v.jpg',
      Brand: "Volkswagen",
      Model: "Golf",
      description: 'Versatile hatchback',
      Bought: false,
      price: 28000,
      type: 'HatchBack',
      Quantity: 1,
      AddedToCart: false
    }, {
      id: "11",
      image: 'assets/images/lexus.jpg',
      Brand: "Lexus",
      Model: "RX",
      description: 'Luxury crossover SUV',
      Bought: false,
      price: 60000,
      type: 'Sedan',
      Quantity: 1,
      AddedToCart: false
    }, {
      id: "12",
      image: 'assets/images/nissan-a.jpg',
      Brand: "Nissan",
      Model: "Altima",
      description: 'Reliable and efficient',
      Bought: false,
      price: 24000,
      type: 'Sedan',
      Quantity: 2,
      AddedToCart: false
    }];
  
  
  constructor() { }

  GetProduct(){
return this.products;

  }

GetProductById(id:string): Product | undefined{
  return this.products.find(product=>product.id ===id)
}
GetCartList(){
  return this.products.filter(product=> product.AddedToCart === true);
}
CreateProduct(){

}
UpdateProduct(id:string){


}
}
