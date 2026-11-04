import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-graphic-design',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './graphic-design.html',
  styleUrl: './graphic-design.css',
})
export class GraphicDesign {
contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      service: ['Graphic Design', Validators.required],
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
