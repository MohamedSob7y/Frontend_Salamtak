import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Appointment {
  id: number;
  patientName: string;
  time: string;
  date: string;
  type: string;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
}

interface ScheduleSlot {
  day: string;
  time: string;
  isAvailable: boolean;
}

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DoctorDashboardComponent implements OnInit {
  
  // Header User Data
  userName = 'Patient Name';
  userEmail = 'omarbassiiiony@yahoo.com';
  userProfilePicUrl = 'assets/patient-avatar.png'; 

  // Stats
  stats = {
    totalPatients: 142,
    upcomingAppointments: 8,
    newReports: 3
  };

  appointments: Appointment[] = [
    { id: 1, patientName: 'John Doe', time: '10:00 AM', date: 'Tomorrow', type: 'General Checkup', status: 'Upcoming' },
    { id: 2, patientName: 'Sarah Smith', time: '01:30 PM', date: 'Tomorrow', type: 'Follow-up', status: 'Upcoming' }
  ];

  // Schedule States
  isScheduleCreated = false;
  isSchedulePopupOpen = false;
  
  // Dynamic Schedule Configuration
  startTime = '09:00'; // 24-hour format for the time input
  endTime = '15:00';
  slotDuration = '30'; // Default in minutes

  daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  timeSlots: string[] = [];
  weeklySchedule: ScheduleSlot[] = [];

  ngOnInit(): void {
    this.updateScheduleGrid();
  }

  // Automatically recalculates the time slots based on start time, end time, and duration
  updateScheduleGrid() {
    if (!this.startTime || !this.endTime || !this.slotDuration) return;

    // 1. Calculate the new time labels (e.g., "09:00 AM", "09:30 AM")
    this.timeSlots = this.generateTimeLabels(this.startTime, this.endTime, parseInt(this.slotDuration, 10));

    // 2. Preserve any slots the doctor already clicked
    const oldSchedule = [...this.weeklySchedule];
    this.weeklySchedule = [];

    // 3. Rebuild the schedule grid
    this.daysOfWeek.forEach(day => {
      this.timeSlots.forEach(time => {
        // Check if this specific day and time was previously marked as available
        const existingSlot = oldSchedule.find(s => s.day === day && s.time === time);
        this.weeklySchedule.push({
          day: day,
          time: time,
          isAvailable: existingSlot ? existingSlot.isAvailable : false 
        });
      });
    });
  }

  // Helper method to generate time increments
  private generateTimeLabels(start: string, end: string, durationMins: number): string[] {
    const slots: string[] = [];
    const [startHr, startMin] = start.split(':').map(Number);
    const [endHr, endMin] = end.split(':').map(Number);

    let currentMins = (startHr * 60) + startMin;
    const endMins = (endHr * 60) + endMin;

    // Loop until the next slot would exceed the end time
    while (currentMins + durationMins <= endMins) {
      slots.push(this.formatMinutesToAMPM(currentMins));
      currentMins += durationMins;
    }

    return slots;
  }

  // Helper method to format raw minutes into 12-hour AM/PM format
  private formatMinutesToAMPM(totalMins: number): string {
    const h = Math.floor(totalMins / 60);
    const m = totalMins % 60;
    const ampm = h >= 12 ? 'PM' : 'AM';
    const displayH = h % 12 === 0 ? 12 : h % 12;
    const displayM = m < 10 ? '0' + m : m.toString();
    return `${displayH < 10 ? '0' + displayH : displayH}:${displayM} ${ampm}`;
  }

  getSlotsForDay(day: string): ScheduleSlot[] {
    return this.weeklySchedule.filter(slot => slot.day === day);
  }

  toggleSlotAvailability(slot: ScheduleSlot) {
    slot.isAvailable = !slot.isAvailable;
  }

  // Modal Controls
  openScheduleModal() {
    this.isSchedulePopupOpen = true;
  }

  closeScheduleModal() {
    this.isSchedulePopupOpen = false;
  }

  saveSchedule() {
    this.isScheduleCreated = true;
    this.isSchedulePopupOpen = false;
  }

  publishSchedule() {
    alert(`Schedule published successfully from ${this.formatMinutesToAMPM(parseInt(this.startTime.split(':')[0])*60 + parseInt(this.startTime.split(':')[1]))} to ${this.formatMinutesToAMPM(parseInt(this.endTime.split(':')[0])*60 + parseInt(this.endTime.split(':')[1]))} with ${this.slotDuration}-minute slots!`);
  }

  onEditProfile() {
    alert('Navigating to Edit Profile page...');
  }
}