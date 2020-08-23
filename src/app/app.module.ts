import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { MatButtonModule,MatCheckboxModule,MatIconModule,MatInputModule,MatMenuModule, MatCardModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { OktaAuthModule } from '@okta/okta-angular';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatListModule
    // OktaAuthModule.initAuth({
    //   issuer: 'https://dev-370428-admin.com/oauth2/default',
    //   redirectUri: 'http://localhost:4200/implicit/callback',
    //   clientId: '0oar8060h4GAGLZvH4x6'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
