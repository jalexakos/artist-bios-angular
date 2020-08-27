import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JColeComponent } from './j-cole/j-cole.component';
import { KendrickComponent } from './kendrick/kendrick.component';
import { ShoBarakaComponent } from './sho-baraka/sho-baraka.component';
import { SwitchfootComponent } from './switchfoot/switchfoot.component';
import { WhitneyComponent } from './whitney/whitney.component';

import { ShellComponent } from './shared/shell/shell.component';

const routes: Routes = [
  {
    path: 'home', component: ShellComponent
  },  
  {
    path: 'j-cole', component: JColeComponent
  },
  {
    path: 'kendrick', component: KendrickComponent
  },
  {
    path: 'sho-baraka', component: ShoBarakaComponent
  },
  {
    path: 'switchfoot', component: SwitchfootComponent
  },
  {
    path: 'whitney', component: WhitneyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
