import { Injectable } from '@angular/core';
import { Report, models, service } from 'powerbi-client';
import { HttpClient } from '@angular/common/http';
import * as pbi from 'powerbi-client';

@Injectable({
  providedIn: 'root',
})
export class PowerBiService {
  private powerBiClient: any;

  powerbi:any

  constructor() {}

  embedreport(embedUrl:string,accessToken:string):void
  {
    const config:pbi.IEmbedConfiguration ={
      type:'report',
      tokenType:pbi.models.TokenType.Embed,
      accessToken:accessToken,
      embedUrl:embedUrl,
      settings:{
        filterPaneEnabled:false,
        navContentPaneEnabled:true
      }
    };
    const reportContainer = document.getElementById('report-container')

    const report = this.powerbi.embed(reportContainer,config)
  }
}
//  powerbi = service;
//  embed:any

// config:pbi.IEmbedConfiguration = {
//   type:'report',
//   accessToken:'',
//   embedUrl:'',
//   id:''

// };

//  report!: Report;

// constructor(private http:HttpClient) {}

// loadReport():void
// {
//   this.config.id = 'report-id';
//   this.config.embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=' +this.config.id;

//    const accessToken ='access-token';

//    this.config.accessToken = accessToken;

//    const reportContainer = <HTMLElement>document.getElementById('report-container')
//   //  this.report = this.powerbi.embed(reportContainer, this.config)

// }
