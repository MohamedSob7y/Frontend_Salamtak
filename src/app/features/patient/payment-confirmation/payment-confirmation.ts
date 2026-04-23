import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment-confirmation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './payment-confirmation.html',
  styleUrl: './payment-confirmation.scss'
})
export class PaymentConfirmationComponent {}