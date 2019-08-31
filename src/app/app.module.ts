import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ListMasterComponent } from './listMaster/list-master/list-master.component';
import { ListDetailComponent } from './listMaster/list-detail/list-detail.component';

@NgModule({
	declarations: [ AppComponent, NavbarComponent, AddMovieComponent, ListMasterComponent, ListDetailComponent ],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
