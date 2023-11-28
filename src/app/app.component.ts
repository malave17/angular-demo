import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { DirectiveComponent } from "./directive/directive.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { DirectivePracticeComponent } from "./directive-practice/directive-practice.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, DataBindingComponent, EventBindingComponent, DirectiveComponent, ProductListComponent, DirectivePracticeComponent]
})
export class AppComponent {
  title = 'my-app';
}
