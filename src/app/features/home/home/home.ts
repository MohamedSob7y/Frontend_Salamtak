import { Component } from '@angular/core';
import { LucideAngularModule, Users, ShieldCheck, Star } from 'lucide-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  readonly Users = Users;
  readonly ShieldCheck = ShieldCheck;
  readonly Star = Star;
  constructor(private router: Router) {}

goLogin() {
  this.router.navigate(['/login']);
}
}




