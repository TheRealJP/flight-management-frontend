import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  data: any;
  constructor(private router: Router, private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {
    var id = Number.parseInt(this.route.snapshot.paramMap.get("id"));
    this.service.getReservation(id).subscribe((response: any) => {
      this.data = response;
    });
  }

  checkin(numberOfBags: Number) {
    let request: any = new Object();
    request.id = this.data.id;
    request.isCheckedIn = true;
    request.numberOfBags = numberOfBags;
    this.service.sendCheckinRequest(request).subscribe(data => console.log(data));
    this.router.navigate(['/confirm']);
  }
}