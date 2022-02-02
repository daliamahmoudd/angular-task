import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { paymentType } from 'src/app/models/payment-type.model';
import { category } from 'src/app/models/category.model';
import { paymentType } from 'src/app/models/payment-type.model';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentService } from 'src/app/_services/payment.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  constructor(private categoriesServe:CategoryService,private paymethod:PaymentService) { }
  cat!:category[] 
  methods:paymentType[]=this.paymethod.getAll()
  ngOnInit(): void {
  this.cat=this.categoriesServe.getAllCategories();
  }
  onSubmit(formobj:NgForm){console.log(formobj.value)}
  checkme(index:number,name:string){console.log(index,name)}
  
}
