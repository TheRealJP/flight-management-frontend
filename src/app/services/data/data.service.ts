import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "localhost:8081/flightreservation/reservations";

  constructor(private http: HttpClient) { }

  public getReservation(id: number): any {
    return this.http.get(this.url + "/" + id).subscribe(data => console.log(data));
  }

  public sendCheckinRequest(checkinRequest: String): Observable<any> {
    let response: Observable<any> = this.http.post(this.url, checkinRequest);

    response.toPromise().catch(error => console.log(error));
    return response;
  }

}