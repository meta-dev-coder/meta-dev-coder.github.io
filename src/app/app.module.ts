import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgxImageZoomModule } from 'ngx-image-zoom';
//import { MatCarouselModule } from '@ngmodule/material-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ImagesComponent } from './components/images/images.component';
import { SearchByImagesComponent } from './components/search-by-images/search-by-images.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    HeaderComponent,
    DashboardComponent,
    ImagesComponent,
    SearchByImagesComponent,
    ImageCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    NgxImageZoomModule,

  ],
  providers: [
   // MatCarouselModule.forRoot()
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [
    ImageCarouselComponent
  ]
})
export class AppModule { }
