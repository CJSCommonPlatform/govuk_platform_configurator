import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { YourCaseComponent } from './+your-case/your-case.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'your-case', component: YourCaseComponent , data: {'post': true}},
  { path: '**', redirectTo: '' }
];
