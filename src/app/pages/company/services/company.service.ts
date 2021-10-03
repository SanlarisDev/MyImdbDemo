import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from 'src/app/shared/services/error.service';
import { URLSAPI } from 'src/app/shared/urls';
import { environment } from 'src/environments/environment';
import { CompanyEntity } from '../company.entity';

@Injectable()
export class CompanyService {

  private _baseUrl: string = environment.urlApi + URLSAPI.COMPANY;

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  /**
   *
   * @returns Observable<CompanyEntity[]>
   */
  getAllCompanies(): Observable<CompanyEntity[]> {
    return this.http.get<CompanyEntity[]>(this._baseUrl).pipe(catchError((e) => this.errorService.handleError(e, 'los estudios')));
  }

  /**
   *
   * @param id
   * @returns Observable<CompanyEntity>
   */
  getCompany(id: string): Observable<CompanyEntity> {
    return this.http.get<CompanyEntity>(this._baseUrl + '/' + id).pipe(catchError((e) => this.errorService.handleError(e, 'el estudio', true)));
  }

  /**
   *
   * @param company
   * @returns Observable<CompanyEntity>
   */
  createCompany(company: CompanyEntity): Observable<CompanyEntity> {
    return this.http.put<CompanyEntity>(this._baseUrl, company).pipe(catchError((e) => this.errorService.handleError(e, 'el estudio')));
  }

  /**
   *
   * @param company
   * @returns Observable<CompanyEntity>
   */
  setCompany(company: CompanyEntity): Observable<CompanyEntity> {
    return this.http.put<CompanyEntity>(this._baseUrl  + '/' + company.id, company).pipe(catchError((e) => this.errorService.handleError(e, 'el estudio')));
  }
}
