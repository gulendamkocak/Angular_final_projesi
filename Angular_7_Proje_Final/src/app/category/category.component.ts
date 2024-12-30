import { Component } from '@angular/core';
import { Category } from './category';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-category',
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
     title ="Kategori Listesi" 
     categories : Category[] = [
        {id:1, name:"Elektronik"},
        {id:2, name:"Bilgisayar"},
        
     ]
}