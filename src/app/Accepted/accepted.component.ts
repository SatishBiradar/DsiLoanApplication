import { Component } from '@angular/core';
import { AcceptedService } from './accepted.service';
import { ILoanApplication } from '../../common/LoanApplication';

@Component({
  templateUrl: './accepted.component.html'
})
export class AcceptedComponent {
    loading = false;
    acceptedApplications: ILoanApplication[];
    pageTitle: string = "Accepted Applications";
    errorMessage: string
    constructor (private  _acceptedService: AcceptedService)
    {
    }
    ngOnInit():void{
        this.loading = true;
        this._acceptedService.getAcceptedApplications()
            .subscribe(apps => {
                this.acceptedApplications = apps;
                this.loading = false;
            },
            error => {
                this.errorMessage = <any>error;
                this.loading = false;
            });

    }
}