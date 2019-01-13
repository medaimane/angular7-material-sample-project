import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FormExampleComponent} from './components/form-example/form-example.component';
import {DatasourceExampleComponent} from './components/datasource-example/datasource-example.component';
import {TreeFilesystemComponent} from './components/tree-filesystem/tree-filesystem.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'datasource',
    component: DatasourceExampleComponent
  },
  {
    path: 'shipping-form',
    component: FormExampleComponent
  },
  {
    path: 'files-structure',
    component: TreeFilesystemComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
