// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-book-appointment',
//   standalone: true,
//   imports: [CommonModule, FormsModule, RouterModule],
//   templateUrl: './book-appointment.html',
//   styleUrl: './book-appointment.scss'
// })
// export class BookAppointmentComponent {

//   searchText = '';
//   selectedSpecialty = '';
//   selectedLocation = '';

//   specialties = ['Cardiology', 'Dermatology', 'Neurology'];
//   locations = ['Cairo', 'Giza', 'Alexandria'];

//   doctors = [
//     {
//       id: 1,
//       name: 'Dr. Ahmed Mohamed',
//       specialty: 'Cardiology',
//       location: 'Cairo',
//       rating: 4.9,
//       experience: 10,
//       image: 'assets/images/doc1.jpg',
//       online: true
//     },
//     {
//       id: 2,
//       name: 'Dr. Sara Ali',
//       specialty: 'Dermatology',
//       location: 'Giza',
//       rating: 4.7,
//       experience: 7,
//       image: 'assets/images/doc2.jpg',
//       online: false
//     },
//     {
//       id: 3,
//       name: 'Dr. Omar Hassan',
//       specialty: 'Neurology',
//       location: 'Alexandria',
//       rating: 4.8,
//       experience: 9,
//       image: 'assets/images/doc3.jpg',
//       online: true
//     }
//   ];

//   get filteredDoctors() {
//     return this.doctors.filter(d =>
//       (!this.searchText || d.name.toLowerCase().includes(this.searchText.toLowerCase())) &&
//       (!this.selectedSpecialty || d.specialty === this.selectedSpecialty) &&
//       (!this.selectedLocation || d.location === this.selectedLocation)
//     );
//   }

//   clearFilters() {
//     this.searchText = '';
//     this.selectedSpecialty = '';
//     this.selectedLocation = '';
//   }
// }




import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './book-appointment.html',
  styleUrl: './book-appointment.scss'
})
export class BookAppointmentComponent {

  searchText = '';
  selectedSpecialty = '';
  selectedLocation = '';

  specialties = ['Cardiology', 'Dermatology', 'Neurology'];
  locations = ['Cairo', 'Giza', 'Alexandria'];

  doctors = [
    {
      id: 1,
      name: 'Dr. Ahmed Mohamed',
      specialty: 'Cardiology',
      location: 'Cairo',
      rating: 4.9,
      experience: 10,
      image: 'assets/images/doc1.jpg',
      online: true
    },
    {
      id: 2,
      name: 'Dr. Sara Ali',
      specialty: 'Dermatology',
      location: 'Giza',
      rating: 4.7,
      experience: 7,
      image: 'assets/images/doc2.jpg',
      online: false
    },
    {
      id: 3,
      name: 'Dr. Omar Hassan',
      specialty: 'Neurology',
      location: 'Alexandria',
      rating: 4.8,
      experience: 9,
      image: 'assets/images/doc3.jpg',
      online: true
    }
  ];

  get filteredDoctors() {
    return this.doctors.filter(d =>
      (!this.searchText || d.name.toLowerCase().includes(this.searchText.toLowerCase())) &&
      (!this.selectedSpecialty || d.specialty === this.selectedSpecialty) &&
      (!this.selectedLocation || d.location === this.selectedLocation)
    );
  }

  clearFilters() {
    this.searchText = '';
    this.selectedSpecialty = '';
    this.selectedLocation = '';
  }
}