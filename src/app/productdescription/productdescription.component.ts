import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-productdescription',
  templateUrl: './productdescription.component.html',
  styleUrls: ['./productdescription.component.scss']
})
export class ProductdescriptionComponent implements OnInit {

  constructor(private productserve:ProductService ) {}
    p=this.productserve.getidOfEle()
    //product=this.productserve.productArray.find((ele)=>{ele._id==this.id})
// add(){
//   if( !this.productserve.cartArray.find(ele=>this.p!._id==ele._id)){
//     this.productserve.addItemToCart(this.p!);}
//      else {
//        this.productserve.cartArray.splice(this.productserve.cartArray.indexOf(
//         this.p!),1);
             
//              this.p!.rep++
//              this.productserve.addItemToCart(this.p!)}

// }

  ngOnInit(): void {
  }
 
}
