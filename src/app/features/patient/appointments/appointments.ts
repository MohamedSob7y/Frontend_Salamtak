import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.scss']
})
export class AppointmentsComponent {

  activeTab: 'upcoming' | 'history' = 'upcoming';

  constructor(private router: Router) {}

  appointments = [
    {
      id: 1,
      doctor: 'Dr. Ahmed Mohamed',
      specialty: 'Cardiology',
      date: '22 Apr 2026',
      time: '5:00 PM',
      status: 'Confirmed'
    },
    {
      id: 2,
      doctor: 'Dr. Sara Ali',
      specialty: 'Dermatology',
      date: '24 Apr 2026',
      time: '3:30 PM',
      status: 'Pending'
    },
    {
      id: 3,
      doctor: 'Dr. Omar Hassan',
      specialty: 'Neurology',
      date: '10 Apr 2026',
      time: '2:00 PM',
      status: 'Completed'
    }
  ];

  get upcoming() {
    return this.appointments.filter(a => a.status === 'Confirmed' || a.status === 'Pending');
  }

  get history() {
    return this.appointments.filter(a => a.status === 'Completed' || a.status === 'Cancelled');
  }

  goToBook() {
    this.router.navigate(['/patient/book-appointment']);
  }

  goToChatbot() {
    this.router.navigate(['/chatbot']);
  }

  cancelAppointment(id: number) {
    const appt = this.appointments.find(a => a.id === id);

    if (appt) {
      appt.status = 'Cancelled';
      alert('Appointment cancelled ❌');
    }
  }
}