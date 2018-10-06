import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  two() {
    this.router.navigate(['two']);
  }

  three() {
    this.router.navigate(['three'], {queryParams: {'lorem': 'ipsum'}, fragment: 'dolor'})
  }
}
