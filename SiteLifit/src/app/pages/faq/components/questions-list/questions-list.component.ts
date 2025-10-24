import { Component } from '@angular/core';
import { 
  CdkAccordionModule, 
  CdkAccordionItem 
} from '@angular/cdk/accordion';

@Component({
  selector: 'app-questions-list',
  imports: [CdkAccordionModule, CdkAccordionItem],
  templateUrl: './questions-list.component.html',
  styleUrl: './questions-list.component.css'
})
export class QuestionsListComponent {
  questions = [
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
