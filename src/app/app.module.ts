import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneModule } from './phone/phone-form/phone-module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/PhoneForm', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    PhoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
