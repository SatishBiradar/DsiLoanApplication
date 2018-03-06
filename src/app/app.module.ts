import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import { LoadingModule } from 'ngx-loading';  
import { AppComponent } from './app.component';
import { MakeComponent } from './Make/make.component';
import { AcceptedComponent } from './Accepted/accepted.component';
import { DeclinedComponent } from './Declined/declined.component';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeComponent,
    AcceptedComponent,
    DeclinedComponent,
    WelcomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    LoadingModule,
    RouterModule.forRoot([
      { path:'welcome',component:WelcomeComponent},
      { path:'make',component:MakeComponent},
      { path:'accepted',component:AcceptedComponent},
      { path:'declined',component:DeclinedComponent},
      { path:'about',component:AboutComponent},
      { path:'',redirectTo:'welcome',pathMatch:'full'},
      { path:'**',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
