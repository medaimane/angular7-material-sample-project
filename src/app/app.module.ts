import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {LayoutModule} from '@angular/cdk/layout';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material/app-material.module';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {GridlistComponent} from './components/gridlist/gridlist.component';
import {HomeComponent} from './components/home/home.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {MainNavigationComponent} from './components/main-navigation/main-navigation.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { FormExampleComponent } from './components/form-example/form-example.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { DatasourceExampleComponent } from './components/datasource-example/datasource-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GridlistComponent,
    HomeComponent,
    PageNotFoundComponent,
    MainNavigationComponent,
    DashboardComponent,
    FormExampleComponent,
    DatasourceExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    LayoutModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
