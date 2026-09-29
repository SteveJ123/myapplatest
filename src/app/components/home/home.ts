import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface BusinessObject {
  id: string;
  title: string;
  category: 'Main' | 'Ancillary';
  type: 'Tech' | 'Education' | 'Media' | 'Legal';
  icon: string;
  badgeColor: string;
  gradient: string;
  shortDescription: string;
  fullClauseText: string;
  tags: string[];
  keyHighlights: string[];
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   searchQuery: string = '';
  selectedCategory: string = 'All Objects';
  selectedDomain: string = 'All';
  copyStatusText: string = 'Copy Charter Text';
  activeModalObject: BusinessObject | null = null;

  categories: string[] = ['All Objects', 'Main Objects', 'Ancillary Objects'];
  domainTypes: string[] = ['All', 'Tech', 'Education', 'Media', 'Legal'];

  objects: any[] = [
    {
      id: 'main-1',
      title: 'Web, Mobile & E-Commerce Application Development',
      category: 'Main',
      type: 'Tech',
      icon: 'code',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      gradient: 'from-indigo-500 to-blue-600',
      shortDescription: 'End-to-end design, development, cloud infrastructure, and deployment of scalable web apps, mobile platforms, enterprise solutions, and e-commerce portals.',
      fullClauseText: 'To carry on the business of designing, developing, engineering, maintaining, hosting, testing, and marketing web applications, mobile applications, custom software solutions, enterprise platforms, and e-commerce portals; to provide web domain, cloud computing, database management, and maintenance services to clients across domestic and international markets.',
      tags: ['SaaS', 'Mobile Apps', 'Cloud', 'E-Commerce', 'Web Engineering'],
      keyHighlights: [
        'Web & Mobile Software Engineering',
        'Custom Enterprise Platform Architecture',
        'Global Cloud Hosting & Infrastructure Management',
        'Database & API Maintenance Services'
      ]
    },
    {
      id: 'main-2',
      title: 'Education, Training & Skill Development in Emerging Tech',
      category: 'Main',
      type: 'Education',
      icon: 'academic-cap',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      gradient: 'from-emerald-500 to-teal-600',
      shortDescription: 'Operating academies, online platforms, and certification workshops in AI, ML, Data Analytics, Full Stack Web Development, and Digital Design.',
      fullClauseText: 'To establish, operate, conduct, and manage training centers, academies, online learning platforms, workshops, and educational programs to impart skill development, certification, and training in computer software, web development, Artificial Intelligence (AI), Machine Learning (ML), data analytics, graphic design, and other emerging digital technologies.',
      tags: ['AI/ML Training', 'Academies', 'Skill Certification', 'EdTech'],
      keyHighlights: [
        'Artificial Intelligence & Machine Learning Courses',
        'Corporate & Academic Workshops',
        'Online E-Learning Platform Operations',
        'Professional Tech Skills Certification'
      ]
    },
    {
      id: 'main-3',
      title: 'Digital Advertising, Branding & Graphic Design',
      category: 'Main',
      type: 'Media',
      icon: 'speakerphone',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      gradient: 'from-purple-500 to-pink-600',
      shortDescription: 'Full-service digital agency covering SEO, SMM, corporate brand identity, UI/UX design, and creative content strategy.',
      fullClauseText: 'To establish and operate an advertising and branding agency to render services including, but not limited to, digital marketing, search engine optimization (SEO), social media marketing (SMM), brand strategy, corporate identity design, logo creation, banner and poster design, user interface/user experience (UI/UX) design, and creative content planning for businesses.',
      tags: ['SEO/SMM', 'Brand Strategy', 'UI/UX Design', 'Digital Agency'],
      keyHighlights: [
        'Full Digital Marketing & SEO Strategy',
        'Corporate Identity & Logo Branding',
        'UI/UX System Design for Products',
        'Social Media & Creative Content Production'
      ]
    },
    {
      id: 'main-4',
      title: 'Video Production & Post-Production Services',
      category: 'Main',
      type: 'Media',
      icon: 'video-camera',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      gradient: 'from-amber-500 to-orange-600',
      shortDescription: 'Comprehensive multimedia production: motion graphics, 2D/3D animation, VFX, ad films, and audio-visual commercial content.',
      fullClauseText: 'To provide end-to-end multimedia production and post-production services, including video editing, motion graphics, 2D/3D animation, visual effects (VFX), promotional video creation, audio-visual content creation, and digital ad film production for online platforms, social media, and commercial broadcasting.',
      tags: ['VFX', '3D Animation', 'Ad Films', 'Video Editing'],
      keyHighlights: [
        '2D & 3D Character Animation',
        'Visual Effects (VFX) & Compositing',
        'Promotional & Ad Film Production',
        'Post-Production & Audio Editing'
      ]
    },
    {
      id: 'ancillary-1',
      title: 'Software, AI Models & Toolkit Licensing',
      category: 'Ancillary',
      type: 'Legal',
      icon: 'key',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      gradient: 'from-blue-500 to-indigo-600',
      shortDescription: 'Buying, selling, licensing, importing, exporting software products, AI models, multimedia toolkits, and infrastructure hardware.',
      fullClauseText: 'To buy, sell, license, import, export, and deal in software products, AI models, multimedia toolkits, and hardware necessary to execute digital services and training courses.',
      tags: ['AI Licensing', 'Hardware Trading', 'Software Distribution'],
      keyHighlights: [
        'AI Model & API Licensing',
        'Software Assets Distribution',
        'Hardware Procurement & Import/Export'
      ]
    },
    {
      id: 'ancillary-2',
      title: 'Strategic Alliances & Franchising',
      category: 'Ancillary',
      type: 'Legal',
      icon: 'handshake',
      badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
      gradient: 'from-teal-500 to-emerald-600',
      shortDescription: 'Forging joint ventures, franchise networks, and institutional partnerships to expand technological and educational reach.',
      fullClauseText: 'To enter into partnerships, joint ventures, franchise agreements, or strategic alliances with educational institutions, technology providers, and corporate entities to expand service offerings.',
      tags: ['Franchise', 'Joint Ventures', 'Academia Partnerships'],
      keyHighlights: [
        'Educational Institution Alliances',
        'Tech Provider Joint Ventures',
        'Franchise Network Expansion'
      ]
    },
    {
      id: 'ancillary-3',
      title: 'Intellectual Property Protection & Assets',
      category: 'Ancillary',
      type: 'Legal',
      icon: 'shield-check',
      badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
      gradient: 'from-pink-500 to-rose-600',
      shortDescription: 'Acquiring, registering, and securing copyrights, trademarks, domain names, patents, and proprietary software assets.',
      fullClauseText: 'To apply for, acquire, register, and protect intellectual property rights, including trademarks, copyrights, patents, and domain names related to the company’s software, brand, and course materials.',
      tags: ['Trademarks', 'Copyrights', 'IP Protection', 'Patents'],
      keyHighlights: [
        'Trademark & Patent Registrations',
        'Software Codebase Copyright Protection',
        'Course Material & Brand IP Rights'
      ]
    }
  ];

  get filteredObjects(): BusinessObject[] {
    return this.objects.filter(obj => {
      // Category filter
      if (this.selectedCategory === 'Main Objects' && obj.category !== 'Main') return false;
      if (this.selectedCategory === 'Ancillary Objects' && obj.category !== 'Ancillary') return false;

      // Domain filter
      if (this.selectedDomain !== 'All' && obj.type !== this.selectedDomain) return false;

      // Search query filter
      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase();
        const matchesTitle = obj.title.toLowerCase().includes(q);
        const matchesDesc = obj.shortDescription.toLowerCase().includes(q);
        const matchesFull = obj.fullClauseText.toLowerCase().includes(q);
        const matchesTags = obj.tags.some((t:any) => t.toLowerCase().includes(q));
        return matchesTitle || matchesDesc || matchesFull || matchesTags;
      }

      return true;
    });
  }

  getMainObjects(): any[] {
    return this.filteredObjects.filter(o => o.category === 'Main');
  }

  getAncillaryObjects(): any[] {
    return this.filteredObjects.filter(o => o.category === 'Ancillary');
  }

  toggleDomainFilter(domain: string) {
    this.selectedDomain = domain;
  }

  openModal(obj: BusinessObject) {
    this.activeModalObject = obj;
  }

  closeModal() {
    this.activeModalObject = null;
  }

  copyClauseText(text: string, title: string) {
    const textarea = document.createElement('textarea');
    textarea.value = `[${title}]\n\n${text}`;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    this.copyStatusText = 'Copied Clause!';
    setTimeout(() => {
      this.copyStatusText = 'Copy Charter Text';
    }, 2000);
  }

  copyFullDocument() {
    let fullDoc = "NEXUS DIGITAL TECHNOLOGIES & ACADEMY\nMEMORANDUM OF ASSOCIATION - MAIN & ANCILLARY OBJECTS\n\n";
    this.objects.forEach((obj, idx) => {
      fullDoc += `${idx + 1}. ${obj.title} (${obj.category} Object)\n${obj.fullClauseText}\n\n`;
    });

    const textarea = document.createElement('textarea');
    textarea.value = fullDoc;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    this.copyStatusText = 'Entire Charter Copied!';
    setTimeout(() => {
      this.copyStatusText = 'Copy Charter Text';
    }, 2500);
  }

  exportSummaryPDF() {
    this.copyFullDocument();
    alert('Charter summary and legal text copied to clipboard! You can paste it into your official documentation or PDF generator.');
  }

  faqList: any[] = [
    {
      id: 1,
      question: 'WHICH TYPE OF E-COMMERCE WEBSITES HAVE YOU DEVELOPED IN THE PAST?',
      answer: 'We have built B2B, B2C, multi-vendor marketplaces, single-brand online storefronts, and custom subscription-based platforms using modern tech stacks.',
      isOpen: false
    },
    {
      id: 2,
      question: 'HOW MUCH TIME DOES IT NEED FOR AN ONLINE STORE TO GO LIVE?',
      answer: 'It depends, Actually developing an E-commerce website is not an easy thing. It requires many features as well as a specific language to design an e-commerce site. At us, we take the time period very seriously, and our experts design it in a very short time period. Normally it takes a month to design an e-commerce website but we can make it quick for you.',
      isOpen: true
    },
    {
      id: 3,
      question: 'WHAT IF I FACE ANY ISSUES ON MY E-COMMERCE WEBSITE AFTER DELIVERY?',
      answer: 'We provide dedicated post-launch technical support, maintenance, and regular updates to ensure continuous smooth operation of your store.',
      isOpen: false
    }
  ];

  toggleAccordion(id: number): void {
    this.faqList = this.faqList.map(item => ({
      ...item,
      isOpen: item.id === id ? !item.isOpen : false
    }));
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
