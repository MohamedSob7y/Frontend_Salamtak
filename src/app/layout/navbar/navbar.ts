import { Component } from '@angular/core';
 import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
constructor(private router: Router) {}
goToFeatures() {
  this.router.navigate(['/']).then(() => {
    setTimeout(() => {
      const el = document.getElementById('features');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  });
}
goToHow() {
  this.router.navigate(['/']).then(() => {
    setTimeout(() => {
      const el = document.getElementById('how-it-works');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  });
}
handleFindDoctor() {
  const user = localStorage.getItem('user');
  if (user) {
    this.router.navigate(['/patient/book-appointment']);
  } else {
    localStorage.setItem('redirectAfterLogin', '/patient/book-appointment');
    this.router.navigate(['/login']);
  }
}
}
