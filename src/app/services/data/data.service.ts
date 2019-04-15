import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable, TimeoutError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "localhost:8081/flightreservation/reservations";

  constructor(private _http: Http) { }

  public getReservation(id: any): any {
    return this._http.get(this.url + id)
      .pipe(map(response => {
        return response.json();
      }, (error: any) => {
        console.error(error);
      }))
  }

  public sendCheckinRequest(checkinRequest: any): Observable<Response> {
    return this._http.post(this.url, checkinRequest).pipe(map(response => {
      return response.json();
    }, (error: any) => {
      console.error(error);
    }));
  }

}