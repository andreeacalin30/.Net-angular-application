import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Settings } from '../common/settings';
import { Loan } from '../models/loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanServiceService {

  private loansUrl = Settings.API_ENDPOINT + "/loans";


  constructor(private httpClient: HttpClient) { }

  addLoan(addedLoan: Loan): Observable<any>{
    return this.httpClient.post<any>(this.loansUrl, JSON.stringify(addedLoan),{
      headers: Settings.httpOptions.headers
    });
  }

  getAllLoans(): Observable<any>{
    return this.httpClient.get<Loan>(this.loansUrl, {
      headers: Settings.httpOptions.headers
    });
  }

  getLoanById(id: string): Observable<any>{
    var getByIdUrl = this.loansUrl + "/" + id;
    return this.httpClient.get<any>(getByIdUrl, {
      headers: Settings.httpOptions.headers
    });
  }

  deleteLoan(loan: any): Observable<any>{
    var options = {
      headers: Settings.headers,
      body: JSON.stringify(loan)
    }
    return this.httpClient.request<any>('delete', this.loansUrl, options);
  }
}
