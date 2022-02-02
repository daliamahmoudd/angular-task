import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { product } from "../models/product.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
 
  providedIn: 'root'
})


export class ProductService{
  // itemAdded: EventEmitter<any> = new EventEmitter<any>();
   productArray!: product[] 
   cartArray: product[] =[];
  myid?:product
  constructor(private httpclient:HttpClient) {

  }

  getAllProducts(): Observable<{product:product[],numberOfProducts:number}> {
   return this.httpclient.get<{product:product[],numberOfProducts:number}>(`${environment.baseUrl}product`)
  }
   getProductById(id: string) : product | undefined {
     return this.productArray.find(item => item._id === id);
   }
  addProduct(product: product) {
    this.productArray.push(product)
  }
  // deleteProduct(id: number) : product[]{
  //   return this.productArray.filter(item => item.id != id)
  // }
  addItemToCart(product: product): product[]{
     this.cartArray.push(product)
      const result = this.cartArray;
      console.log(result);
  
      return result;
     }
     setidOfEle(id:product){this.myid=id}
     getidOfEle(){return this.myid}
     ////////////////////////////////
     total!:number
     caltotal(){
    this.total=0
      for(let i=0;i<this.cartArray.length;i++){      
     this.total+=(this.cartArray[i].price)*this.cartArray[i].rep;
      }
    return this.total
    
      }
      l!:number
      counter(){
        this.l=0
      for(let i=0;i<this.cartArray.length;i++){
        this.l+=this.cartArray[i].rep
      }
      return this.l;
      }
     
  // deletecart(id: number) : product[]{
  //   const res= this.cartArray.filter(item => item.id != id);

  //   console.log(res)
  //   return(res)
  // }
  //preventdublicated(i:number){return this.rep;}
}
