import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class ProfileComponent implements OnInit {

  editMode = false;
  saving = false;

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl(''),
    gender: new FormControl(''),
    address: new FormControl(''),
    emergencyContact: new FormControl(''),
    avatar: new FormControl('assets/images/default-user.png')
    
  });

  ngOnInit() {
    const saved = localStorage.getItem('user');

    if (saved) {
      const data = JSON.parse(saved);

      this.form.patchValue({
        name: data.name || '',
        email: data.email || '',
        phone: data.phone || '',
        dateOfBirth: data.dateOfBirth || '',
        gender: data.gender || '',
        address: data.address || '',
        emergencyContact: data.emergencyContact || '',
        avatar: data.avatar || 'assets/images/default-user.png'
      });
    }
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving = true;

    localStorage.setItem('user', JSON.stringify(this.form.getRawValue()));

    setTimeout(() => {
      this.saving = false;
      this.editMode = false;
      alert('Profile updated successfully ✅');
    }, 500);
  }

  cancel() {
    this.editMode = false;
    this.ngOnInit();
  }

  onFileChange(event: any) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.form.patchValue({
        avatar: reader.result as string
      });
    };

    reader.readAsDataURL(file);
  }

  get f() {
    return this.form.controls;
  }
}


