import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
isshow :boolean=true

 isDisplay:boolean = true;
selectedDay: any;

 toggle(){
    this.isDisplay = !this.isDisplay;
}
 contactPreference:string="";
}