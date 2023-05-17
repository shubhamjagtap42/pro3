import { Component,OnInit,ViewChild } from '@angular/core';
import * as pbi from 'powerbi-client'
import { config } from 'rxjs';

@Component({
  selector: 'app-pbiurl',
  templateUrl: './pbiurl.component.html',
  styleUrls: ['./pbiurl.component.css']
})
export class PbiurlComponent implements OnInit {


  report!:pbi.Report;

   
  embedConfig:pbi.IEmbedConfiguration=
  {
    
  }
  ngOnInit() 
  {

    
  }

  


}
