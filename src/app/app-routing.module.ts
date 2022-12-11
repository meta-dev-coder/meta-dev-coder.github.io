import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ImagesComponent } from './components/images/images.component';
import { LoginComponent } from './components/login/login.component';
import { SearchByImagesComponent } from './components/search-by-images/search-by-images.component';

const routes: Routes = [
  { path: '', redirectTo: '/searchImages', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent },
  { path: 'images', component: ImagesComponent },
  {path: 'searchImages', component: SearchByImagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
