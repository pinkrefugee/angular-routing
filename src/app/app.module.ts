import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { RouterModule, Routes } from '@angular/router';
import { Grandchild1Component } from './grandchild1/grandchild1.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  {
    path: 'child1/:id',
    component: Child1Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'child2',
    component: Child2Component,
    children: [
      {
        path: 'grand1',
        component: Grandchild1Component
      },
  ]
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Child1Component,
    Child2Component,
    Grandchild1Component
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
