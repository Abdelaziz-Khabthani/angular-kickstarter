import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.snapshot.queryParams
    // this.route.snapshot.fragment

    this.route.queryParams.subscribe(
      (param: Params) => {
        console.log(param);
      }
    );
    this.route.fragment.subscribe(
      (fragment: string) => {
        console.log(fragment);
      }
    );
  }

}
