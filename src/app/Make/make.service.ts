import {Injectable} from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
//import { Http,Headers, RequestOptions} from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';

import { ILoanApplication } from '../../common/LoanApplication';



@Injectable()
export class MakeApplicationService{
    private _dsiLoanAppUrl = 'https://dragnetloanapplicationfuncs.azurewebsites.net/api/MakeApplication?code=OpssEv86ItG/Sz3KRNOnNCfrpiBLmoa0IuzYWAjrwEMFgLXF27doag==';
    //private _dsiLoanAppUrl = 'http://localhost:7071/api/MakeApplication';
    constructor (private _http: HttpClient){

    }

    makeApplication(appl: ILoanApplication) {
        return this._http.post(this._dsiLoanAppUrl,appl,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*'),
              });
            //   .subscribe(
            //     res => {
            //         console.log("Success!");
            //         return 'Your loan application has been submitted.';
            //       }
            //     ),
            //   err=>{
            //     console.log("Error occured:", err);
            //     return 'Could not submit your loan application.';
            //   };
    }
    private handleError(err:HttpErrorResponse){
        console.log(err.message)
        return err.message;
    }
}
