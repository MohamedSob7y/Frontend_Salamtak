import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule ,CommonModule,RouterModule], 
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent {

  role: 'patient' | 'doctor' = 'patient';

  user: any = { specialty: '' ,gender: '',};

  confirmPassword = '';
  agreeTerms = false;

  
  patientReport: any = null;
  doctorCV: any = null;
  doctorID: any = null;

  constructor(private router: Router) {}

  switchRole(role: any) {
    this.role = role;
  }


  onPatientFile(e: any) {
    this.patientReport = e.target.files[0]?.name;
  }

 
  onDoctorCV(e: any) {
    this.doctorCV = e.target.files[0]?.name;
  }

  onDoctorID(e: any) {
    this.doctorID = e.target.files[0]?.name;
  }

  register() {

    if (this.user.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!this.agreeTerms) {
      alert('Agree to terms');
      return;
    }

    if (this.role === 'doctor') {
      if (!this.doctorCV || !this.doctorID) {
        alert('Upload CV and ID');
        return;
      }
    }

    this.user.role = this.role;
    this.user.patientReport = this.patientReport;
    this.user.doctorCV = this.doctorCV;
    this.user.doctorID = this.doctorID;

    localStorage.setItem('user', JSON.stringify(this.user));

    if (this.role === 'patient') {
      this.router.navigate(['/patient/dashboard']);
    } else {
      this.router.navigate(['/doctor/dashboard']);
    }
  }
}