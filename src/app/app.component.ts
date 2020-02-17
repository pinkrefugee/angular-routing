import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { FeatureService } from './feature.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing';
  constructor(private router: Router, private activateRoute: ActivatedRoute, private feature: FeatureService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        console.log(feature.value);
      }
      if (val instanceof NavigationEnd) {
        console.log(val.url);
        console.log(feature.value);
      }

    });
  }
}
