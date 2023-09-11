import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private httpClient: HttpClient) { }

//Returns one observable
  getEmployee(): Observable<any>{
    return this.httpClient.get('http://localhost:8080/employee/all')
  }

  addEmployee( body: any): Observable<any> {
    return this.httpClient.post('http://localhost:8080/employee/add', body);
  }

  getEmployeeById( id: number): Observable<any> {
    return this.httpClient.get('http://localhost:8080/employee/get/'+ id);
  }
    
  updateEmployee(id:number,body:any):Observable<any>{
    return this.httpClient.put('http://localhost:8080/employee/update/'+id,body)
  }

  removeEmployee(id:number):Observable<any>{
    return this.httpClient.delete('http://localhost:8080/employee/delete/'+id)
  }

}
