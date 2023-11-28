import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName:string="Mike";

  companyName:string="Google";

  employeeObj:any = {
    employeeName:"John",
    designation:"Angular Developer",
    salary:40000,
    skills:["Angular","HTML"]
  }
  isBtnDisaplay:boolean = true;
  imgPath:string="https://th.bing.com/th/id/OIP.u3mgmYMq4ofTd4lBtZtbxQHaD4?pid=ImgDet&rs=1"; 

  message1:string="Welcome to the Velocity";
AnnualSalary:number=4300
  productModal: any;
calculateTotalPrice(){
  console.log("product Data",this.productModal.productName);

}
  // productModal(arg0: string, productModal: any) {
  //   throw new Error('Method not implemented.');
  // }
  

  }

