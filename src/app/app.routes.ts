import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { WebDevelopment } from './components/web-development/web-development';
import { AppDevelopment } from './components/app-development/app-development';
import { WebsiteMaintenance } from './components/website-maintenance/website-maintenance';
import { DigitalMarketing } from './components/digital-marketing/digital-marketing';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'services', component: Services },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
   { path: 'website-development', component: WebDevelopment },
   { path: 'app-development', component: AppDevelopment },
   { path: 'website-maintenance', component: WebsiteMaintenance },
   { path: 'digital-marketing', component: DigitalMarketing },
  { path: '**', redirectTo: '' },
];
