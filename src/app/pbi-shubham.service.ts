import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PbiShubhamService {

  // private apiUrl ='https://api.powerbi.com/v1.0/myorg/reports/{reportId}/GenerateToken';



  constructor(private http:HttpClient) {}

  getReportDetails(reportId:string)
  {
    return this.http.get(`${environment.url}/reports/${reportId}`)
  }

  // getEmbedToken(reportId:string,accessToken:string)
  // {
  //   const headers = new HttpHeaders({
  //     'Authorization':`Bearer ${accessToken}`
  //   });

    
  //   return this.http.post(`${environment.url}/reports/${reportId}/GenerateToken`,body,{headers:headers})
  // }

 
}
