import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product';
import { ProductFilterPipe } from "./product-filter.pipe";
import { FormsModule } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';


@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [CommonModule, ProductFilterPipe, FormsModule] // Buraya ekleyin
 // Buraya ekleyin
})
export class ProductComponent {
  constructor(private alertifyService:AlertifyService){ }
  title = "Ürün Listesi"
  filterText=""
  products : Product[] = [
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook", imageUrl:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGFwdG9wfGVufDB8fDB8fHww"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGFwdG9wfGVufDB8fDB8fHww"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook",imageUrl:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGFwdG9wfGVufDB8fDB8fHww"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGFwdG9wfGVufDB8fDB8fHww"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook",imageUrl:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGFwdG9wfGVufDB8fDB8fHww"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGFwdG9wfGVufDB8fDB8fHww"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook",imageUrl:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGFwdG9wfGVufDB8fDB8fHww"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGFwdG9wfGVufDB8fDB8fHww"}
  ]
    
  
addToCart(product: Product) {
  this.alertifyService.success(product.name+ " added")
}


}