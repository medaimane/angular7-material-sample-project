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
import { ReactiveFormsModule } from '@angular/forms';
import { DatasourceExampleComponent } from './components/datasource-example/datasource-example.component';
import { DragDropExampleComponent } from './components/drag-drop-example/drag-drop-example.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TreeFilesystemComponent } from './components/tree-filesystem/tree-filesystem.component';

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
    DatasourceExampleComponent,
    DragDropExampleComponent,
    TreeFilesystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    LayoutModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
