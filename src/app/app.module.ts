import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPowerBiModule } from 'ngx-powerbi';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { ReportType, powerBiServiceFactory } from 'ngx-powerbi/public-api';
import { PbireportComponent } from './pbireport/pbireport.component';
import { PbidashboardComponent } from './pbidashboard/pbidashboard.component';
import { PbiembedComponent } from './pbiembed/pbiembed.component';
import { PbitokenComponent } from './pbitoken/pbitoken.component';
import { PbiurlComponent } from './pbiurl/pbiurl.component';
import { PbilastComponent } from './pbilast/pbilast.component';
import { PbifirstComponent } from './pbifirst/pbifirst.component';
import { PbidemoComponent } from './pbidemo/pbidemo.component';
import { PbiDemoShubhamComponent } from './pbi-demo-shubham/pbi-demo-shubham.component'; 
import { PbiShubhamService } from './pbi-shubham.service';
import { HttpClientModule } from '@angular/common/http';







@NgModule({
  declarations: [
    AppComponent,
    PbireportComponent,
    PbidashboardComponent,
    PbiembedComponent,
    PbitokenComponent,
    PbiurlComponent,
    PbilastComponent,
    PbifirstComponent,
    PbidemoComponent,
    PbiDemoShubhamComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPowerBiModule ,
    PowerBIEmbedModule,
    HttpClientModule,
  
    
    
  
  ],
  providers: [PbiShubhamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
