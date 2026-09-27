import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = { name: '', email: '', message: '' };

  onSubmit() {
    alert('Thank you for contacting SunflowerNetwork! We will respond shortly.');
    this.formData = { name: '', email: '', message: '' };
  }
}
