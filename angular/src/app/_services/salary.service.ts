﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetCusInputDto } from '../_models/get-cus-input-dto';
import { Customer } from '../_models/customer';
import { GetSalaryInputDto } from '../_models/get-salary-input-dto';

@Injectable({ providedIn: 'root' })
export class SalaryService {
  readonly APIUrl = 'http://localhost:60276';

  constructor(private http: HttpClient) {}

  getSalary(val: GetSalaryInputDto): Observable<any[]> {
    return this.http.post<any>(this.APIUrl + '/salary', val);
  }

 
}
