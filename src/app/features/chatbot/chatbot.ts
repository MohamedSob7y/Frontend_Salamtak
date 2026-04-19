import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.scss']
})
export class ChatbotComponent {

  constructor(private router: Router) {}

  userInput = '';
  isThinking = false;

  messages: any[] = [
    {
      text: 'Hello 👋 / أهلاً 👋 أنا مساعدك الطبي. اكتب أعراضك.',
      sender: 'bot'
    }
  ];

  sendMessage() {
    if (!this.userInput.trim()) return;

    const input = this.userInput.toLowerCase();

    // user message
    this.messages.push({
      text: this.userInput,
      sender: 'user'
    });

    this.userInput = '';

    // 👇 يظهر loading
    this.isThinking = true;

    // 👇 رد تلقائي بعد وقت
    setTimeout(() => {
      const response = this.getResponse(input);

      this.messages.push({
        text: response.text,
        sender: 'bot',
        specialty: response.specialty
      });

      this.isThinking = false;
    }, 1200);
  }

  getResponse(input: string) {

    // 🧠 عربي + إنجليزي
    if (
      input.includes('headache') ||
      input.includes('صداع') ||
      input.includes('دوخة')
    ) {
      return {
        text: '🧠 ممكن تحتاج دكتور مخ وأعصاب (Neurologist)',
        specialty: 'Neurology'
      };
    }

    if (
      input.includes('skin') ||
      input.includes('rash') ||
      input.includes('جلد') ||
      input.includes('حساسية')
    ) {
      return {
        text: '🧴 يفضل زيارة دكتور جلدية (Dermatologist)',
        specialty: 'Dermatology'
      };
    }

    if (
      input.includes('chest') ||
      input.includes('heart') ||
      input.includes('صدر') ||
      input.includes('قلب')
    ) {
      return {
        text: '❤️ الأفضل زيارة دكتور قلب (Cardiologist)',
        specialty: 'Cardiology'
      };
    }

    if (
      input.includes('fever') ||
      input.includes('حمى') ||
      input.includes('سخونية')
    ) {
      return {
        text: '🌡️ ممكن تحتاج دكتور باطنة (General Physician)',
        specialty: ''
      };
    }

    return {
      text: '👨‍⚕️ محتاج دكتور عام، جرب توضح الأعراض أكتر',
      specialty: ''
    };
  }

  goToDoctors(specialty: string) {
    this.router.navigate(['/patient/book-appointment'], {
      queryParams: { specialty: specialty }
    });
  }
}
