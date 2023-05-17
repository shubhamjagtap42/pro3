import { Component, ElementRef, ViewChild } from '@angular/core';
import * as pbi from 'powerbi-client';
import { environment } from 'src/environment/environment';

declare var powerbi: any;

@Component({
  selector: 'app-pbiembed',
  templateUrl: './pbiembed.component.html',
  styleUrls: ['./pbiembed.component.css'],
})
export class PbiembedComponent {
  [x: string]: any;
  public screenHeight!: number;
  @ViewChild('reportContainer')
  reportContainer!: ElementRef;
  report: any;


  // ngOnInit()
  // {
  //   this.screenHeight = (window.screen.height);
  //   var token = get
  // }

  

  ngOnInit()
  {
    this.screenHeight = (window.screen.height);
    var token = this.showreport;
  }





  showreport(Token: any) {
    // let embedURL = environment.powerBI.reportBaseURL;
    // let embedReportId = environment.powerBI.reportID;

    // let settings: pbi.IEmbedSettings = {
    //   filterPaneEnabled: false,
    //   navContentPaneEnabled: false,
    // };

    // let config: pbi.IEmbedConfiguration = {
    //   type: 'report',
    //   tokenType: pbi.models.TokenType.Embed,
    //   accessToken: Token.token,
    //   embedUrl:
    //   'https://app.powerbi.com/view?r=eyJrIjoiY2M1NmFhODItYzVlOS00NGFhLThiNjEtYWYyMzMxMGIyYWViIiwidCI6IjY0MjAwMTk3LThkMTItNGRjYS1hMjJkLWJiZWJmZmFmNzY3YSJ9',
    //   id: embedReportId,
    //   filters: [],
    //   settings: settings,
    // };

    // let reportContainer = this.reportContainer.nativeElement;
    // let powerbi = new pbi.service.Service(
    //   pbi.factories.hpmFactory,
    //   pbi.factories.wpmpFactory,
    //   pbi.factories.routerFactory
    // );

    // this.report = powerbi.embed(reportContainer,config);
    // this.report.off('loaded');
    // this.report.on('loaded',()=>{
    //   console.log('loaded');
    //   this['setTokenExpirationListner'](Token.expiration,2);
      
    // });
    // this.report.on('error',()=>{

    //   this['getToken']();
    //   console.log("Error");
      
    // })
  }
 
}
