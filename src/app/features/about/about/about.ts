import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule], // 👈 مهم
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {}
