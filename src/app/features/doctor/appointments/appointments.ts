import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Appointment {
  id: string;
  patientName: string;
  age: number;
  gender: string;
  bloodType: string;
  date: string;
  time: string;
  type: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  contact: string;
  notes: string;
}

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.scss']
})
export class Appointments implements OnInit {

  // 🟢 Mock Data
  appointments: Appointment[] = [
    { 
      id: 'APT001', patientName: 'John Doe', age: 45, gender: 'Male', bloodType: 'O+', 
      date: 'May 01, 2026', time: '10:00 AM', type: 'General Checkup', status: 'Confirmed', 
      contact: '010-1234-5678', notes: 'Patient complaining of mild fatigue and frequent headaches.' 
    },
    { 
      id: 'APT002', patientName: 'Sarah Smith', age: 32, gender: 'Female', bloodType: 'A-', 
      date: 'May 01, 2026', time: '01:30 PM', type: 'Follow-up', status: 'Confirmed', 
      contact: '011-9876-5432', notes: 'Following up on previous blood pressure medication adjustment.' 
    },
    { 
      id: 'APT003', patientName: 'Michael Brown', age: 58, gender: 'Male', bloodType: 'B+', 
      date: 'May 02, 2026', time: '09:00 AM', type: 'Consultation', status: 'Pending', 
      contact: '012-3333-4444', notes: 'Initial consultation for lower back pain.' 
    },
    { 
      id: 'APT004', patientName: 'Emily Davis', age: 28, gender: 'Female', bloodType: 'AB+', 
      date: 'April 29, 2026', time: '11:00 AM', type: 'Lab Results', status: 'Confirmed', 
      contact: '015-5555-6666', notes: 'Discussing recent thyroid panel results.' 
    }
  ];

  // 🟢 Modal State
  isModalOpen = false;
  selectedAppointment: Appointment | null = null;

  constructor() {}

  ngOnInit(): void {}

  // =========================
  // 🔥 ACTIONS
  // =========================

  cancelAppointment(id: string) {
    const confirmCancel = confirm('Are you sure you want to cancel this appointment?');
    if (confirmCancel) {
      const apt = this.appointments.find(a => a.id === id);
      if (apt) {
        apt.status = 'Cancelled';
      }
    }
  }

  viewDetails(appointment: Appointment) {
    this.selectedAppointment = appointment;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedAppointment = null;
  }

  // =========================
  // 🔥 REPORT LOGIC (FIXED)
  // =========================

  isReportUnlocked(appointment: Appointment | null): boolean {
    if (!appointment) return false;

    const aptDateTimeString = `${appointment.date} ${appointment.time}`;
    const appointmentDate = new Date(aptDateTimeString);
    const currentDate = new Date();

    return currentDate >= appointmentDate;
  }

  openReport() {
    if (this.selectedAppointment && this.isReportUnlocked(this.selectedAppointment)) {
      alert(`Opening medical report for ${this.selectedAppointment.patientName}...`);
    } else {
      alert('Report is not available yet.');
    }
  }
}