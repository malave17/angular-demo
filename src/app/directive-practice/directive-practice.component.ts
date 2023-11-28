import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive-practice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive-practice.component.html',
  styleUrl: './directive-practice.component.css'
})
export class DirectivePracticeComponent {
  selectedDay:string="";
  weekdays:string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  
}
