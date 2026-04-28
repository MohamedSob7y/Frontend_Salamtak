import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-payment-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-confirmation.html',
  styleUrls: ['./payment-confirmation.scss']
})
export class PaymentConfirmationComponent {
  payment: any;
today = new Date().toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
}) + ' • ' + new Date().toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit'
});
  constructor(private router: Router) {
    this.payment = JSON.parse(localStorage.getItem('payment') || '{}');
  }
  goDashboard() {
    this.router.navigate(['/patient/dashboard']);
  }
  downloadReceipt() {
  const data = document.querySelector('.card') as HTMLElement;

  if (!data) {
    return;
  }

  html2canvas(data).then(canvas => {
    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');

    pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
    pdf.save('receipt.pdf');
  });
}
}