import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => 
      console.log(params['id']));
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
