import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { ILoanApplication } from '../../common/LoanApplication';
@Injectable()
export class DeclinedService{
    private _dsiLoanAppUrl = 'https://dragnetloanapplicationfuncs.azurewebsites.net/api/GetAcceptedApplications?name=declined-applications';
    constructor (private _http: HttpClient){

    }
    getDeclinedApplications(): Observable<ILoanApplication[]>{
        return this._http.get<ILoanApplication[]>(this._dsiLoanAppUrl) 
        .do(data=>console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(err:HttpErrorResponse){
        console.log(err.message)
        return Observable.throw(err.message);
    }   
}
