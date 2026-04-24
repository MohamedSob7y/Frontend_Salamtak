import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password';
import { AboutComponent } from './features/about/about/about';
import { HomeComponent } from './features/home/home/home';
import { PatientDashboardComponent } from './features/patient/dashboard/dashboard';
import { DoctorDashboardComponent } from './features/doctor/dashboard/dashboard';

export const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  {
    path: 'patient/appointments',
    loadComponent: () =>
      import('./features/patient/appointments/appointments')
        .then(m => m.AppointmentsComponent)
  },

  {
    path: 'patient/book-appointment',
    loadComponent: () =>
      import('./features/patient/book-appointment/book-appointment')
        .then(m => m.BookAppointmentComponent)
  },

  {
    path: 'patient/medical-records',
    loadComponent: () =>
      import('./features/patient/medical-records/medical-records')
        .then(m => m.MedicalRecordsComponent)
  },

  {
    path: 'patient/profile',
    loadComponent: () =>
      import('./features/patient/profile/profile')
        .then(m => m.ProfileComponent)
  },

  {
    path: 'patient/doctor/:id',
    loadComponent: () =>
      import('./features/patient/doctor-profile/doctor-profile')
        .then(m => m.DoctorProfileComponent)
  },

  {
  path: 'patient/notifications',
  loadComponent: () =>
    import('./features/patient/notifications/notifications')
      .then(m => m.NotificationsComponent)
},
{
  path: 'chatbot',
  loadComponent: () =>
    import('./features/chatbot/chatbot')
      .then(m => m.ChatbotComponent)
},
  { path: 'about', component: AboutComponent },

  {
    path: 'patient/dashboard',
    component: PatientDashboardComponent
  },

  {
    path: 'doctor/dashboard',
    component: DoctorDashboardComponent
  },

  {
    path: 'patient/payment',
    loadComponent: () =>
      import('./features/patient/payment/payment')
        .then(m => m.PaymentComponent)
  },

  {
    path: 'patient/payment-confirmation',
    loadComponent: () =>
      import('./features/patient/payment-confirmation/payment-confirmation')
        .then(m => m.PaymentConfirmationComponent)
  },

  {
    path: '**',
    redirectTo: ''
  }
];