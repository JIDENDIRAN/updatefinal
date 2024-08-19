import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


import { AppComponent } from './app.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';


import { CreatehospitalComponent } from './createhospital/createhospital.component';
import { ScheduleMaintenanceComponent } from './schedule-maintenance/schedule-maintenance.component';
import { RequestequipmentComponent } from './requestequipment/requestequipment.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { OrdersComponent } from './orders/orders.component';
import { ErrorComponent } from './error/error.component';
import { HomePageComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'home-page', component: HomePageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashbaordComponent },
  { path: 'createhospital', component: CreatehospitalComponent },  
  { path: 'schedule-maintenance', component: ScheduleMaintenanceComponent },  
  { path: 'requestequipment', component: RequestequipmentComponent },  
  { path: 'maintenance', component: MaintenanceComponent },  
  { path: 'orders', component: OrdersComponent },  
  { path: '', redirectTo:'/home-page', pathMatch: 'full'},

  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
