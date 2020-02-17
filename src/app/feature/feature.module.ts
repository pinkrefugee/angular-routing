import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'message', component: MessageComponent },
];

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class FeatureModule { }
