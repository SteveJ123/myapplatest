import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  billingPeriod: string;
  commission: string;
  commissionSubtext: string;
  features: string[];
  isPopular?: boolean;
}

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing {
  plans: PricingPlan[] = [
    {
      id: 'basic',
      name: 'Basic',
      price: 'Zero',
      billingPeriod: 'Fixed Fee',
      commission: '10%',
      commissionSubtext: 'commissions (including Indian Payment Gateway)*',
      features: [
        '200 students',
        'Landing pages (3 templates)',
        'Course Storage 20 GB media upload',
        'Team Management',
        'Advanced Analytics',
        'Chat Rooms',
        'WhatsApp Integration (Automations & Broadcast)**',
        'Email Broadcasting (10 email credits/ user) & Automations',
        'Storefront',
        'Certificates & Security',
        'Access to TagMango Community',
        'Zapier & Pabbly Integration',
        'Path'
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '₹5,000',
      billingPeriod: '+GST /month',
      commission: '+ 5.5%',
      commissionSubtext: 'commissions (including Indian Payment Gateway)*',
      features: [
        'Everything in Basic +',
        'Unlimited students',
        'Unlimited storage',
        'Refund Automation',
        'Free Products using 100% OFF coupons',
        '50k email/month for broadcast',
        'Exclusive Landing Page templates',
        'Build Custom Certificates',
        'Timer'
      ],
      isPopular: true
    },
    {
      id: 'advanced',
      name: 'Advanced',
      price: '₹15,000',
      billingPeriod: '+GST /month',
      commission: '+ 3.5%',
      commissionSubtext: 'commissions (including Indian Payment Gateway)*',
      features: [
        'Everything in Pro +',
        'Community Channels & Forums',
        'Multi-Media Uploads',
        'Advanced Message Room & Threads',
        'Affiliate',
        'Gamification',
        'DRM Course Protection',
        'Zoom Webinar - 500 people',
        'Up-Sell on Check-Out',
        'User Addition'
      ]
    },
    {
      id: 'ultimate',
      name: 'Ultimate',
      badge: 'AI-Verse Stack Included',
      price: '₹30,000',
      billingPeriod: '+GST /month',
      commission: 'Zero Commissions',
      commissionSubtext: '(lowest Indian gateway charge: 1.5 %)*',
      features: [
        'Everything in Advanced +',
        'Mango AI',
        'Theme AI',
        'AI Funnel Builder',
        'AI App Builder',
        '1000 AI Credits',
        'Customer Success Manager'
      ]
    }
  ];

  onSelectPlan(planId: string) {
    console.log(`Selected plan: ${planId}`);
    // Handle navigation or modal opening logic here
  }
}
