import { Component } from '@angular/core';
import { AcceptedService } from './Accepted/accepted.service';
import { DeclinedService } from './Declined/declined.service';
import { MakeApplicationService } from './Make/make.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AcceptedService,DeclinedService,MakeApplicationService]
})
export class AppComponent {
  title = 'Dragnet Loan Application';
  //pageTitle: string = "Make Application";
}
