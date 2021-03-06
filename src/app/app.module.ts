import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { TableComponent } from './components/table/table.component';
import { MaterialModule } from './material-module';
import { FavTableComponent } from './components/fav-table/fav-table.component';
import { FavWindowComponent } from './components/fav-window/fav-window.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './redux/reducers';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    TableComponent,
    FavTableComponent,
    FavWindowComponent
  ],
  entryComponents: [
    FavWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LayoutModule,
    MaterialModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
