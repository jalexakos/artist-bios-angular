import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule,MatSidenavContent } from '@angular/material/sidenav'; //MatSidenavContent is a component that we will use later
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  LayoutModule,
  CommonModule,
  RouterModule
]

const components = [
  ShellComponent
]

@NgModule({
  declarations: [ShellComponent],
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    ...components
  ]
})
export class SharedModule { }
