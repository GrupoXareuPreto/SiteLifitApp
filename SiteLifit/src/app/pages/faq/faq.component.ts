import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgFor, NgIf } from '@angular/common';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';


@Component({
  standalone: true,
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  imports:[FooterComponent,HeaderComponent, CdkAccordionModule, NgIf, NgFor, QuestionsListComponent],
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
  
}
