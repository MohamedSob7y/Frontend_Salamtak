import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './notifications.html',
  styleUrls: ['./notifications.scss']
})
export class NotificationsComponent {

  constructor(private router: Router) {}

  filter: 'all' | 'unread' | 'important' = 'all';
  opened: number | 'critical' | null = null;

  criticalAlert = {
    title: 'Abnormal Lab Results',
    message: 'Your potassium levels appear low. Please review your medical report and follow up with your doctor if needed.',
    time: '12:04 PM · TODAY',
    important: true,
    read: false
  };

  notifications = [
    {
      title: 'Appointment Confirmed',
      message: 'Dr. Ahmed appointment confirmed for 22 Apr 2026 - 5:00 PM',
      details: 'Your appointment has been confirmed successfully. You can review all details or book another appointment if needed.',
      time: '5 min ago',
      read: false,
      important: true,
      type: 'success',
      route: '/patient/appointments'
    },
    {
      title: 'Medical Report Ready',
      message: 'Your blood test results are available now',
      details: 'A new report was added to your medical records. Review it and keep it saved for your next doctor visit.',
      time: 'Yesterday',
      read: false,
      important: false,
      type: 'info',
      route: '/patient/medical-records'
    },
    {
      title: 'Appointment Reminder',
      message: 'You have an appointment tomorrow with Dr. Sara',
      details: 'Please be ready 10 minutes before your appointment time and review your doctor profile if needed.',
      time: '2 days ago',
      read: true,
      important: false,
      type: 'default',
      route: '/patient/appointments'
    }
  ];

  setFilter(type: 'all' | 'unread' | 'important') {
    this.filter = type;
    this.opened = null;
  }

  get filteredNotifications() {
    if (this.filter === 'unread') {
      return this.notifications.filter(n => !n.read);
    }

    if (this.filter === 'important') {
      return this.notifications.filter(n => n.important);
    }

    return this.notifications;
  }

  toggleOpen(id: number | 'critical') {
    this.opened = this.opened === id ? null : id;
  }

  goToReport(event: Event) {
    event.stopPropagation();
    this.router.navigate(['/patient/medical-records']);
  }

  goToAppointments(event?: Event) {
    if (event) event.stopPropagation();
    this.router.navigate(['/patient/appointments']);
  }

  goToBook() {
    this.router.navigate(['/patient/book-appointment']);
  }

  goToHelp() {
    this.router.navigate(['/about']);
  }

  goToProfile() {
    this.router.navigate(['/patient/profile']);
  }

  openRelated(item: any, event: Event) {
    event.stopPropagation();
    item.read = true;
    this.router.navigate([item.route]);
  }

  markCriticalRead(event: Event) {
    event.stopPropagation();
    this.criticalAlert.read = true;
    alert('Critical alert marked as read');
  }

  markAsRead(item: any, event: Event) {
    event.stopPropagation();
    item.read = true;
  }

  refreshNotifications() {
    this.filter = 'all';
    this.opened = null;

    this.notifications = [...this.notifications].sort((a, b) => {
      if (a.read === b.read) return 0;
      return a.read ? 1 : -1;
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}



