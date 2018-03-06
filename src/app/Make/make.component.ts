import { Component } from '@angular/core';
import { MakeApplicationService } from './make.service';
import { ILoanApplication } from '../../common/LoanApplication';

@Component({
  templateUrl: './make.component.html'
})
export class MakeComponent {
    makeAppl: ILoanApplication;
    pageTitle: string = "Make Application";
    errorMessage: string
    firstName:string ='';
    lastName:string ='';
    age:number;
    email:string ='';
    amount:number;
    constructor (private  _makeService: MakeApplicationService)
    {
    }
    makeApplication():void{
        var modal: ILoanApplication = {
            FirstName : this.firstName,
            LastName : this.lastName,
            Age : this.age,
            Email : this.email,
            Amount : this.amount
        };        

        this._makeService.makeApplication(modal).subscribe(
            res => {
                console.log("Success!");
                
              }
            ),
          err=>{
            console.log("Error occured:", err);
            this.errorMessage = 'Could not submit your loan application.';
          };
          this.errorMessage = 'Your loan application has been submitted.';
          this.firstName = '';
          this.lastName = '';
          this.age = 0;
          this.email = '';
          this.amount = 0;     
    }
    clearScreen():void{
        this.firstName = '';
        this.lastName = '';
        this.age = 0;
        this.email = '';
        this.amount = 0;        
    }
}