import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent {

  role: 'patient' | 'doctor' = 'patient';

  user: any = {
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    specialty: '',
    licenseNumber: '',
    password: ''
  };

  confirmPassword = '';
  agreeTerms = false;

  constructor(private router: Router) {}

  switchRole(role: 'patient' | 'doctor') {
    this.role = role;
  }

  register() {

    if (this.user.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!this.agreeTerms) {
      alert('You must agree to the terms first');
      return;
    }

    this.user.role = this.role;

   
    localStorage.setItem('user', JSON.stringify(this.user));

  
    if (this.role === 'patient') {
      this.router.navigate(['/patient/dashboard']);
    } else {
      this.router.navigate(['/doctor/dashboard']);
    }
  }
}



