import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-website-maintenance',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './website-maintenance.html',
  styleUrl: './website-maintenance.css',
})
export class WebsiteMaintenance {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      service: ['Website Development', Validators.required],
      businessType: ['', Validators.required],
      location: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      alert('Thank you for connecting with us! We will reach out shortly.');
      this.contactForm.reset({ service: 'Website Development' });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
