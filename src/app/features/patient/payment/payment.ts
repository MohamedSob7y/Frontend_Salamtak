import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './payment.html',
  styleUrls: ['./payment.scss']
})
export class PaymentComponent {

  selectedMethod: string = 'card';
  showModal = false;

  cardName = '';
  cardNumber = '';
  expiry = '';
  cvv = '';

  consultation = 450;
  service = 75;
  tax = 73.5;

  get total() {
    return this.consultation + this.service + this.tax;
  }

  constructor(private router: Router) {}

  selectMethod(method: string) {
    this.selectedMethod = method;
  }

  openConfirm() {
    if (this.selectedMethod === 'card') {
      if (!this.cardName || !this.cardNumber || !this.expiry || !this.cvv) {
        alert('Please fill all card data');
        return;
      }
    }
    this.showModal = true;
  }

  confirmPayment() {
    localStorage.setItem('payment', JSON.stringify({
      total: this.total,
      id: 'TXN' + Math.floor(Math.random() * 1000000)
    }));

    this.router.navigate(['/patient/payment-confirmation']);
  }

  cancelPayment() {
    this.showModal = false;
  }
goToAppointment() {
  this.router.navigate(['/patient/book-appointment']);
}
  
  payVodafone() {
    alert('Redirect to Vodafone Cash');
  }

  payFawry() {
    alert('Redirect to Fawry');
  }
}