import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit, OnDestroy {
  id:string;
  sub: Subscription;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.id = this.route.snapshot.params['id']; // works only first time
    this.sub = this.route.params.subscribe(
      (params: Params) => this.id = params['id']
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe(); // To stop listening to the event, optional in this case
  }

  changeId() {
    this.router.navigate(['two', '0']);
  }
}
