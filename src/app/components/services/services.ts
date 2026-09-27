import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = [
    {
      icon: '⚡',
      title: 'Dedicated Fiber Internet',
      description:
        'Symmetrical gigabit throughput with guaranteed latency and bandwidth SLAs for high-demand business environments.',
    },
    {
      icon: '🔒',
      title: 'Managed Network Security',
      description:
        'End-to-end firewall protection, zero-trust architecture, and automated threat mitigation.',
    },
    {
      icon: '☁️',
      title: 'Cloud Direct Connect',
      description:
        'Private, high-performance connections directly linking your on-premise infrastructure to AWS, Azure, and Google Cloud.',
    },
  ];
}
