import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as pbi from 'powerbi-client';


@Component({
  selector: 'app-pbifirst',
  templateUrl: './pbifirst.component.html',
  styleUrls: ['./pbifirst.component.css']
})
export class PbifirstComponent implements OnInit {

  @ViewChild('reportContainer', { static: true }) reportContainer!: ElementRef;


  ngOnInit() {
    let embedUrl = 'https://app.powerbi.com/view?r=eyJrIjoiY2M1NmFhODItYzVlOS00NGFhLThiNjEtYWYyMzMxMGIyYWViIiwidCI6IjY0MjAwMTk3LThkMTItNGRjYS1hMjJkLWJiZWJmZmFmNzY3YSJ9';
    let reportConfig: pbi.IEmbedConfiguration = {
        type: 'report',
        id:'56ac1ded-44f9-453e-acb8-288d31dd2b17',
        embedUrl: embedUrl,
        tokenType: pbi.models.TokenType.Embed,
        accessToken: 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IkNia2w4cHRMTWNOSUhjRzlabUxSeWFXeEJrQUc4U3EzUTF4eUJFZExoVDAiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81ZWQ1ZGQ2NC0zODBiLTQyZTQtYmJhZi03NDE4YTU5NGIwZmYvIiwiaWF0IjoxNjc4MzQyMzc3LCJuYmYiOjE2NzgzNDIzNzcsImV4cCI6MTY3ODM0NjQ0MSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhUQUFBQXlCbEFhOG5sTTc4VzkvMm9yUmRuT1NRVnM0T1QrUllCZ2hJR0JSMkRhUXdLKzhVTWEwMStmaGladnJ2YXZQTWEiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IklSLVBvd2VyQmkiLCJhcHBpZCI6IjI5M2ExOThkLWNjZmMtNGNlNC1hMWQxLWE5MzA0OWI2ZTI0ZiIsImFwcGlkYWNyIjoiMSIsImZhbWlseV9uYW1lIjoiUGF0dG5heWFrIiwiZ2l2ZW5fbmFtZSI6IktoaXJvZCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjU0Ljg2LjUwLjEzOSIsIm5hbWUiOiJLaGlyb2QgUGF0dG5heWFrIiwib2lkIjoiYWY2NDY5M2EtODkyZS00NDgwLTg3YWQtYmYyZGYwNjg2ZGQ5IiwicGxhdGYiOiIxNCIsInB1aWQiOiIxMDAzMjAwMjdERjcwMkQ4IiwicmgiOiIwLkFWVUFaTjNWWGdzNDVFSzdyM1FZcFpTd193TUFBQUFBQUFBQXdBQUFBQUFBQUFDSUFPSS4iLCJzY3AiOiJlbWFpbCBvcGVuaWQgcHJvZmlsZSBVc2VyLlJlYWQiLCJzdWIiOiJqamJyWEtEdER1R3BXZHE2SzAzWEhhZGN1UXFDMkM1a0lQckVxazlTN3BNIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkFTIiwidGlkIjoiNWVkNWRkNjQtMzgwYi00MmU0LWJiYWYtNzQxOGE1OTRiMGZmIiwidW5pcXVlX25hbWUiOiJraGlyb2QucGF0dG5heWFrQGFuZW1vaXNvZnR3YXJlLmNvbS5hdSIsInVwbiI6ImtoaXJvZC5wYXR0bmF5YWtAYW5lbW9pc29mdHdhcmUuY29tLmF1IiwidXRpIjoiSFczcmlKdlJXVU9TTnhHT0JBNF9BQSIsInZlciI6IjEuMCIsIndpZHMiOlsiOWI4OTVkOTItMmNkMy00NGM3LTlkMDItYTZhYzJkNWVhNWMzIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19zdCI6eyJzdWIiOiJUVE1Zc2huZU1aZGNvVU5kc1JyRFFFUU80SERDLWxHSVJkMlRab05scVFJIn0sInhtc190Y2R0IjoxNjU3ODYzNzYzfQ.LumAWqqoo6RcazGFUWSGxBloGxuvuNFAQ2z1V_624Fodlh2q38NlSPCg6e0sdkSeV6MxwOvkbqm-go0LBWPL25Lr9_49SOp5KbHMM1k8w0cWAvzcDcsIFUQdvBm2AQQzlvkReLRJI3ViMHpjo_sAnZSKLqbRwEuz8POz1aFTAobm5_RdPaswg-IV7Ehk91Es4RyAVXAxLqybuJKTmSG28RnxByaxykRLVhvZwfJP4rbBJqVj235AQmIcNky-5iibn7jr_skNv6Y8RB6JkjhXTXICf2013T-FA0mzkpdlYntRfGAcg63vEeKQx3vI_XpLuQ3vq5xCGVB2C_dCN7vWdQ',
        settings: {
            filterPaneEnabled: false,
            navContentPaneEnabled: false
        }
    };

    let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
    let report = powerbi.embed(this.reportContainer.nativeElement, reportConfig);
}

}
