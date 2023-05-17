import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PowerBiService } from '../power-bi.service';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { Embed, models } from 'powerbi-client';
import * as pbi from 'powerbi-client'
@Component({
  selector: 'app-pbitoken',
  templateUrl: './pbitoken.component.html',
  styleUrls: ['./pbitoken.component.css'],
})
export class PbitokenComponent implements OnInit {


  @ViewChild('reportContainer', { static: true }) reportContainer!: ElementRef;

   
  
  ngOnInit() 
  {
    const reportConfig: pbi.IEmbedConfiguration = {
      type: 'report',
      embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=<report-id>&groupId=<group-id>',
      tokenType: pbi.models.TokenType.Embed,
      accessToken: 'your-access-token',
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false
      }
    };
  }
}
