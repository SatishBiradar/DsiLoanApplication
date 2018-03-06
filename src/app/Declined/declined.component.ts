import { Component } from '@angular/core';
import { DeclinedService } from './declined.service';
import { ILoanApplication } from '../../common/LoanApplication';

@Component({
  templateUrl: './declined.component.html'
})
export class DeclinedComponent {
    loading = false;
    declinedApplications: ILoanApplication[];
    pageTitle: string = "Declined Applications";
    errorMessage: string;
    constructor (private  _declinedService: DeclinedService)
    {
    }
    ngOnInit():void{
        this.loading = true;
        this._declinedService.getDeclinedApplications()
        .subscribe(apps => {
            this.declinedApplications = apps;
            this.loading = false;
        },
        error => {
            this.errorMessage = <any>error;
            this.loading = false;
        });     
    }
}