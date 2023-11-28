import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList:any = [
    {productName:"iphone 13",price:45000,quantity:1},
    {productName:"one plus",price:35000,quantity:1},
    {productName:"table",price:5000,quantity:5},
    {productName:"TV",price:45000,quantity:2},
 ]



}
