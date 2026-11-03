import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = [
    {
    title: 'Website Development',
    description: 'Transform your online presence with custom web solutions. We specialize in building fast, secure, and mobile-friendly websites featuring seamless database integration, intuitive navigation, and user-focused design.',
    icon: 'archid-web-removebg-preview.png',
    route: '/website-development'
  },
  {
    title: 'App Development',
    description: 'We design and develop custom, high-performance digital applications tailored to your institutional needs. From intuitive, responsive user interfaces built with modern frameworks to robust backend APIs and secure database integration, we deliver seamless and scalable digital experiences.',
    icon: 'lotus-app-removebg-preview.png',
    route: '/app-development'
  },
  {
    title: 'Digital Marketing',
    description: "Grow your institute's presence with results-driven digital campaigns. From social media engagement to local search visibility, we help you reach students and parents looking for quality education and holistic growth.",
    icon: 'hibiscus-digital-removebg-preview.png',
    route: '/digital-marketing'
  },
  {
    title: 'Website Maintenance',
    description: 'Protect your digital investment. We handle ongoing updates, speed tuning, and security monitoring so your website remains lightning-fast, secure, and fully functional.',
    icon: 'lavendar-maintenance-removebg-preview.png',
    route: '/website-maintenance'
  },
  {
    title: 'Graphic Design',
    description: 'Bring your brand to life with stunning visuals. We design professional banners, course slides, and promotional materials tailored to engage students and parents alike.',
    icon: 'rose-graphic-removebg-preview.png',
    route: "/graphic-design"
  },
  {
    title: 'Domain & Hosting',
    description: 'Ensure your digital platform is always online, lightning-fast, and completely secure. We provide reliable domain registration, seamless DNS management, and high-performance hosting solutions configured specifically to keep your website and student registration workflows running smoothly 24/7.',
    icon: 'tulip-hosting-removebg-preview.png',
    route: "/domain-hosting"
  }
  ];
}
