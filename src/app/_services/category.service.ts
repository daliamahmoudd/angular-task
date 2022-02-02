import { Injectable } from '@angular/core';
import { category } from '../models/category.model';

@Injectable({
 
  providedIn: 'root'
})
export class CategoryService {
  categories:category[]=[
   {id:2,name:'cat1'},
   {id:2,name:'cat2'},
   {id:3,name:'cat3'},
   {id:4,name:'cat4'},



  ]

  constructor() { }
  getAllCategories(){
   return this.categories.slice()
  }
}
