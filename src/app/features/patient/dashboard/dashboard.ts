import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [RouterModule], // ✅ مهم جدا
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class PatientDashboardComponent {}