import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-appointment',
  standalone: true,   // 🔥 مهم جدا
  imports: [CommonModule],
  templateUrl: './book-appointment.html',
  styleUrls: ['./book-appointment.css']
})
export class BookAppointmentComponent {}