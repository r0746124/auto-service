import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Employee} from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>("http://localhost:30946/employees")
  }

  getEmployeeByID(employeeID: number): Observable<Employee>
  {
    return this.http.get<Employee>("http://localhost:30946/employees/" + employeeID)
  }



}
