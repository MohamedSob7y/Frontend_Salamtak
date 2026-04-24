import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  role: 'patient' | 'doctor' = 'patient';
  showPassword = false;
  constructor(private router: Router,private toastr: ToastrService) {
  }
  switchRole(role: 'patient' | 'doctor') {
    this.role = role;
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  login() {    
    const user = JSON.parse(localStorage.getItem('user')!);

    if (user?.role === 'patient') {
      this.router.navigate(['/patient/dashboard']);
    } else if (user?.role === 'doctor') {
      this.router.navigate(['/doctor/dashboard']);
    } else {
      
      this.router.navigate(['/patient/dashboard']);
    }
const redirect = localStorage.getItem('redirectAfterLogin');
if (redirect) {
  localStorage.removeItem('redirectAfterLogin');
  this.router.navigate([redirect]);
} else {
  if (user.role === 'patient') {
    this.router.navigate(['/patient/dashboard']);
  } else {
    this.router.navigate(['/doctor/dashboard']);
  }
}
  }
  signIn() {
  if (this.role === 'doctor') {
    this.router.navigate(['/doctor/dashboard']);
  } else {
    this.router.navigate(['/patient/dashboard']);
  }
}
}