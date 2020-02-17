import { FeatureService } from './../feature.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private feature: FeatureService) {
    this.feature.value = 'It works';
  }

  ngOnInit() {
  }

}
