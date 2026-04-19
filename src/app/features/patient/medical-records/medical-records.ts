import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medical-records',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medical-records.html',
  styleUrl: './medical-records.scss'
})
export class MedicalRecordsComponent {

  patient = {
    name: 'Mohamed Sobhy',
    patientId: 'PT-2026-0142',
    age: 26,
    gender: 'Male',
    bloodGroup: 'A+',
    allergies: 'No known drug allergies',
    chronicDiseases: 'None',
    lastVisit: '14 Apr 2026',
    currentStatus: 'Under Follow-up'
  };

  summary = {
    visits: 6,
    doctors: 3,
    prescriptions: 5,
    investigations: 4
  };

  currentCare = {
    doctor: 'Dr. Ahmed Mohamed',
    specialty: 'Cardiology',
    diagnosis: 'Mild hypertension with intermittent palpitations',
    treatmentDuration: '6 weeks',
    nextAppointment: '21 Apr 2026 - 6:00 PM'
  };

  visits = [
    {
      doctor: 'Dr. Ahmed Mohamed',
      specialty: 'Cardiology',
      date: '14 Apr 2026',
      duration: '30 min',
      complaint: 'Palpitations and mild chest discomfort',
      diagnosis: 'Mild hypertension',
      notes: 'Advised lifestyle modification, low-salt diet, and blood pressure monitoring.'
    },
    {
      doctor: 'Dr. Sara Ali',
      specialty: 'Dermatology',
      date: '05 Mar 2026',
      duration: '20 min',
      complaint: 'Facial rash and itching',
      diagnosis: 'Mild contact dermatitis',
      notes: 'Prescribed topical cream and advised avoiding irritants.'
    },
    {
      doctor: 'Dr. Omar Hassan',
      specialty: 'Neurology',
      date: '20 Jan 2026',
      duration: '25 min',
      complaint: 'Frequent headaches',
      diagnosis: 'Tension headache',
      notes: 'Recommended sleep hygiene, hydration, and symptomatic treatment.'
    }
  ];

  prescriptions = [
    {
      doctor: 'Dr. Ahmed Mohamed',
      date: '14 Apr 2026',
      items: [
        'Amlodipine 5 mg — once daily for 30 days',
        'Magnesium supplement — once daily for 14 days'
      ],
      advice: 'Monitor blood pressure twice daily and avoid excess caffeine.'
    },
    {
      doctor: 'Dr. Sara Ali',
      date: '05 Mar 2026',
      items: [
        'Hydrocortisone cream — apply twice daily for 7 days',
        'Cetirizine 10 mg — once nightly for 5 days'
      ],
      advice: 'Avoid scented skin products and hot water exposure.'
    }
  ];

  investigations = [
    {
      type: 'Lab Test',
      title: 'Complete Blood Count (CBC)',
      requestedBy: 'Dr. Ahmed Mohamed',
      date: '14 Apr 2026',
      status: 'Completed'
    },
    {
      type: 'Imaging',
      title: 'Chest X-Ray',
      requestedBy: 'Dr. Ahmed Mohamed',
      date: '14 Apr 2026',
      status: 'Pending'
    },
    {
      type: 'Cardiac Test',
      title: 'ECG',
      requestedBy: 'Dr. Ahmed Mohamed',
      date: '14 Apr 2026',
      status: 'Completed'
    },
    {
      type: 'Lab Test',
      title: 'Vitamin D Level',
      requestedBy: 'Dr. Omar Hassan',
      date: '20 Jan 2026',
      status: 'Completed'
    }
  ];

  // attachments = [
  //   {
  //     name: 'Blood Pressure Follow-up Report.pdf',
  //     uploadedAt: '15 Apr 2026'
  //   },
  //   {
  //     name: 'ECG Result.pdf',
  //     uploadedAt: '14 Apr 2026'
  //   },
  //   {
  //     name: 'Dermatology Prescription.pdf',
  //     uploadedAt: '05 Mar 2026'
  //   }
  // ];

attachments = [
  {
    name: 'Blood Pressure Follow-up Report.pdf',
    uploadedAt: '15 Apr 2026',
    url: 'assets/reports/bp-report.pdf'
  },
  {
    name: 'ECG Result.pdf',
    uploadedAt: '14 Apr 2026',
    url: 'assets/reports/ecg.pdf'
  },
  {
    name: 'Dermatology Prescription.pdf',
    uploadedAt: '05 Mar 2026',
    url: 'assets/reports/derma.pdf'
  }
];

}