import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KendrickComponent } from './kendrick/kendrick.component';
import { JColeComponent } from './j-cole/j-cole.component';
import { SwitchfootComponent } from './switchfoot/switchfoot.component';
import { WhitneyComponent } from './whitney/whitney.component';
import { ShoBarakaComponent } from './sho-baraka/sho-baraka.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    KendrickComponent,
    JColeComponent,
    SwitchfootComponent,
    WhitneyComponent,
    ShoBarakaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
