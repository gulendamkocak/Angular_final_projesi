import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { CategoryComponent } from "./category/category.component";
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, CategoryComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shop';
}