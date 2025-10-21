import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgFor, NgIf } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  imports:[FooterComponent,HeaderComponent, CdkAccordionModule, NgIf, NgFor],
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
  faqs = [
    {
      question: 'What is your return policy?',
      answer: 'You can return any item within 30 days of purchase for a full refund.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes! We ship worldwide. Delivery times may vary depending on your region.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you’ll receive an email with tracking information.'
    },
    {
      question: 'Can I cancel my order?',
      answer: 'Yes, as long as it hasn’t shipped yet. Please contact our support team.'
    }
  ];
}
