import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importamos las variables entorno
import { environment } from 'src/environments/environment';
//ahora lo de firebase esto cambio en la ultima actualizacion de @angular/fire
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

//modulos core y shared creados por mi
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


//componentes creados por mi
import { HomeComponent } from './public/home/home.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import { FooterComponent } from './public/footer/footer.component';
import { ConditionsComponent } from './public/conditions/conditions.component';
import { AddPaymentsComponent } from './private/add-payments/add-payments.component';
import { DonateComponent } from './private/donate/donate.component';
import { AuthService } from './core/services/auth/auth.service';
import { PageContentComponent } from './public/page-content/page-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ConditionsComponent,
    AddPaymentsComponent,
    DonateComponent,
    PageContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Angular Firebase para autenticacion 
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    //angular firebase autenticacion con Google
    //modulos creados por mi
    CoreModule,
    SharedModule,
    //modulos para llamadas api por http
    HttpClientModule
  ],
  providers: [AuthService], //agregamos el servicio de Auth
  bootstrap: [AppComponent]
})
export class AppModule { }
