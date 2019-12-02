import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
