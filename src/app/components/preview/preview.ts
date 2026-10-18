import { CommonModule } from '@angular/common';
import { Component, ElementRef, signal, ViewChild, PLATFORM_ID, Inject, inject, ChangeDetectorRef, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-preview',
  imports: [CommonModule, FormsModule, Navbar],
  templateUrl: './preview.html',
  styleUrl: './preview.css',
})
export class Preview {
  // UI State Signals
  isTopBarOpen = signal<boolean>(true);
  isMobileMenuOpen = signal<boolean>(false);
  isSearchOpen = signal<boolean>(false);
  isSidebarOpen = signal<boolean>(false);
  isModalOpen = signal<boolean>(false);

  // Form Models
  seoUrl: string = '';
  seoEmail: string = '';
  newsletterEmail: string = '';
  signInUser: string = '';
  signInPass: string = '';

  
  currentSlide = signal<number>(0);
  
  slides = [
    {
      title: 'Web Application Development',
      subtitle: 'Global Cloud Hosting & Infrastructure Management',
      image: 'Development-cuate.svg',
      bgClass: 'bg-[#32b5ab]' 
    },
    {
      title: 'Social Media Marketing Services',
      subtitle: 'An effective social strategy can help you grow your business, maintain your social presence and engage with the audience.',
      image: 'Recording a movie-pana.svg',
      bgClass: 'bg-[#f47432]' // Orange theme
    },
    {
      title: 'App Development',
      subtitle: 'Web Development',
      image: 'Mobile testing-pana.svg',
      bgClass: 'bg-[#32b5ab]' // Teal theme
    },
    {
      title: 'Website Maintenance',
      subtitle: 'Global Cloud Hosting & Infrastructure Management',
      image: 'Maintenance-pana.svg',
      bgClass: 'bg-[#f4a132]' // Yellow-Orange theme
    },
    {
      title: 'Domain & Hosting',
      subtitle: 'Global Cloud Hosting & Infrastructure Management',
      image: 'Finance app-cuate.svg',
      bgClass: 'bg-[#32b5ab]' // Teal theme
    }
  ];

  // Add this data array inside your LandingComponent class
servicesList = [
  {
    title: 'Website Development',
    subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    image: 'archid-web-removebg-preview.png'
  },
  {
    title: 'App Development',
    subtitle: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
    image: 'lotus-app-removebg-preview.png'
  },
  {
    title: 'Digital Marketing',
    subtitle: 'Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius notare.',
    image: 'hibiscus-digital-removebg-preview.png'
  },
  {
    title: 'Website Maintenance',
    subtitle: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
    image: 'lavendar-maintenance-removebg-preview.png'
  },
  {
    title: 'Graphic Design',
    subtitle: 'Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius notare.',
    image: 'rose-graphic-removebg-preview.png'
  },
  {
    title: 'Domain & Hosting',
    subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    image: 'tulip-hosting-removebg-preview.png'
  }
];

private slideInterval: any;
slideDirection = signal<'left' | 'right'>('right'); // Tracks animation direction
private cd = inject(ChangeDetectorRef)
// @ViewChild('servicesSection') servicesSection!: ElementRef;
//   isAnimated = false;

  // @ViewChild('servicesSection2') servicesSection2!: ElementRef;
  // isAnimated2 = false;
 
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Auto-advance carousel every 4 seconds
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);

    // this.checkScroll();    
    // this.checkScroll2();    
  }

private hasLoaded = false;

// @HostListener('window:scroll', [])
//   onWindowScroll() {
//     this.checkScroll();
//     this.checkScroll2();
    
//   }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   this.checkScroll();
  // }

  // private checkScroll() {       
  //   if (isPlatformBrowser(this.platformId) && this.servicesSection) {
  //   const rect = this.servicesSection.nativeElement.getBoundingClientRect();
  //   const windowHeight = window.innerHeight;

  //   // Check if the section is currently inside the view area
  //   if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
  //     this.isAnimated = true;  // Trigger animation when in view
  //   } else {
  //     this.isAnimated = false; // Reset to false when scrolled out of view
  //   }
    
  //   this.cd.detectChanges();
  // }
  // }

  // private checkScroll2() {       
  //   if (isPlatformBrowser(this.platformId) && this.servicesSection) {
  //   const rect = this.servicesSection2.nativeElement.getBoundingClientRect();
  //   const windowHeight = window.innerHeight;

  
  //   if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
  //     this.isAnimated2 = true;
  //   } else {
  //     this.isAnimated2 = false; 
  //   }
    
  //   this.cd.detectChanges();
  // }
  // }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  // nextSlide() {
  //   this.currentSlide.update(index => (index + 1) % this.slides.length);
  // }

  setSlide(index: number) {
    this.currentSlide.set(index);
  }

  // Form Models & Toggles...
  // seoUrl: string = '';
  // seoEmail: string = '';
  // newsletterEmail: string = '';

  toggleTopBar() { this.isTopBarOpen.update(v => !v); }
  toggleMobileMenu() { this.isMobileMenuOpen.update(v => !v); }
  toggleSearch() { this.isSearchOpen.update(v => !v); }
  toggleSidebar() { this.isSidebarOpen.update(v => !v); }
  toggleModal(isOpen: boolean) { this.isModalOpen.set(isOpen); }

  // nextSlide() {
  //   this.currentSlide.update(index => (index + 1) % this.slides.length);
  // }

  // prevSlide() {
  //   this.currentSlide.update(index => (index - 1 + this.slides.length) % this.slides.length);
  // }

  nextSlide() {
    this.slideDirection.set('right'); // Moves left-to-right when going next
    this.currentSlide.update(index => (index + 1) % this.slides.length);
  }

  prevSlide() {
    this.slideDirection.set('left'); // Moves right-to-left when going previous
    this.currentSlide.update(index => (index - 1 + this.slides.length) % this.slides.length);
  }

  onSeoSubmit(event: Event) {
    event.preventDefault();
    alert(`Running SEO Audit for: ${this.seoUrl}`);
  }

  onNewsletterSubmit(event: Event) {
    event.preventDefault();
    alert(`Subscribed successfully with: ${this.newsletterEmail}`);
  }

  faqs: any[] = [
    {
      id: 1,
      question: 'Which type of E-commerce websites have you developed in the past?',
      answer: 'We have built a wide range of platforms including single-vendor web stores, multi-vendor marketplaces, subscription platforms, and customized B2B portals across fashion, tech, and retail sectors.',
      isOpen: false
    },
    {
      id: 2,
      question: 'How much time does it need for an online store to go live?',
      answer: 'It depends. Actually developing an E-commerce website is not an easy thing. It requires many features as well as a specific language to design an e-commerce site. At us, we take the time period very seriously, and our experts design it in a very short time period. Normally it takes a month to design an e-commerce website but we can make it quick for you.',
      isOpen: true
    },
    {
      id: 3,
      question: 'What if I face any issues on my E-commerce website after delivery?',
      answer: 'We offer dedicated post-launch support and maintenance plans. Our technical team is available to assist with bug fixes, performance optimizations, and feature enhancements whenever needed.',
      isOpen: false
    }
  ];

  toggleFaq(id: number): void {
    this.faqs = this.faqs.map(item => ({
      ...item,
      isOpen: item.id === id ? !item.isOpen : false
    }));
  }

  features = [
    { title: 'Google paid campaigns' },
    { title: 'SMO techniques' },
    { title: 'Organic content management' }
  ];
}
