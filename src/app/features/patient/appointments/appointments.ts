import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  standalone: true,   // 🔥 مهم جدا
  imports: [CommonModule],
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.css']
})
export class AppointmentsComponent {}