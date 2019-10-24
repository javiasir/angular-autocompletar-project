import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule,MatInputModule } from '@angular/material';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatInputModule ],
  declarations: [ AppComponent, HelloComponent, SearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
