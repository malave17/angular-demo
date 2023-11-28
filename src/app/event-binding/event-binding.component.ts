import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
lastName: any;
getdata($event: Event) {
throw new Error('Method not implemented.');
}
firstName: any;
enterdName: any;
performAction(arg0: string) {
throw new Error('Method not implemented.');
}
count:number=0;
login(){
  console.log("login success");
  
}
addTocart(){
  ++this.count 
}
removeFormcart(){
 --this.count
}
erformAction(actionName:string){
  if(actionName === 'Increment'){
    this.count++
  }else {
    this.count--;
  }
}
 
print(){
  console.log("mouse over");
}

getData(data:any){
  console.log("Change event fired ",data);
  
this.firstName = data.target.value;
}
lastNameChanged(eventData:any){
  this.lastName = eventData.target.value ;
  console.log("Last Name",this.lastName);
}
}