import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interface/countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryServiceService {
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  get getParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,population,flag,alpha2Code'
    );
  }

  searchCounry(enterData: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${enterData}`;
    return this.http.get<Country[]>(url, { params: this.getParams });
  }

  searchCapital(enterCapital: string): Observable<Country[]> {
    const urlCap = `${this.apiUrl}/capital/${enterCapital}`;
    return this.http.get<Country[]>(urlCap, { params: this.getParams });
  }
  getCodeCountry(id: string): Observable<Country> {
    const urlCod = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(urlCod);
  }
  getRegion(region: string): Observable<Country[]> {
    const byregion = `${this.apiUrl}/regionalbloc/${region}`;
    return this.http.get<Country[]>(byregion, { params: this.getParams });
  }
}
