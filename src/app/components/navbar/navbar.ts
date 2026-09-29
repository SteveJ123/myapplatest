import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
isDesktopDropdownOpen = false;
  isMobileDropdownOpen = false;
  isMobileMenuOpen = false;

  serviceList: any[] = [
    { label: 'Website Development', link: 'website-development' },
    { label: 'App Development', link: 'app-development' },
    { label: 'Website Maintenance', link: 'website-maintenance' },
    { label: 'Digital Marketing', link: 'digital-marketing' }
  ];

  constructor(private elementRef: ElementRef) {}

  toggleDesktopDropdown(): void {
    this.isDesktopDropdownOpen = !this.isDesktopDropdownOpen;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.isMobileDropdownOpen = false;
    }
  }

  toggleMobileDropdown(): void {
    this.isMobileDropdownOpen = !this.isMobileDropdownOpen;
  }

  closeAllMenus(): void {
    this.isDesktopDropdownOpen = false;
    this.isMobileDropdownOpen = false;
    this.isMobileMenuOpen = false;
  }

  // Close dropdowns on outside click
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeAllMenus();
    }
  }
}
