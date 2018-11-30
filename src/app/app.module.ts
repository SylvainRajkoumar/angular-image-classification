import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './composants/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './composants/stats/stats.component';
import { MnistComponent } from './composants/mnist/mnist.component';
import { STATUS_CODES } from 'http';
import { FooterComponent } from './composants/footer/footer.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { SessionService } from './services/session.service';
import { MonitoringService } from './services/monitoring.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { MnistClassificationService } from './services/mnist-classification.service';
import { DeeplearningComponent } from './composants/deeplearning/deeplearning.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'mnist', component: MnistComponent},
  { path: 'stats', component: StatsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StatsComponent,
    MnistComponent,
    FooterComponent,
    NavbarComponent,
    DeeplearningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MDBBootstrapModule.forRoot()
  ],
  providers: [SessionService, MonitoringService, MnistClassificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
