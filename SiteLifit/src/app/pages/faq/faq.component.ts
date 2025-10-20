import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AccordionComponent } from '../../accordion/accordion.component';


@Component({
  selector: 'app-faq',
  imports: [HeaderComponent, FooterComponent, AccordionComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent {

}
