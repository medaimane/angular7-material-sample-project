import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { GridlistComponent } from './components/gridlist/gridlist.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GridlistComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
