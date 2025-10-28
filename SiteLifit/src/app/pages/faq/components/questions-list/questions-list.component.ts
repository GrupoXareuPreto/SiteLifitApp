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
      question: 'O que é o Lifit?',
      answer: 'O Lifit é uma rede social focada em saúde e bem-estar. Nosso objetivo é incentivar hábitos saudáveis, conectar pessoas com os mesmos objetivos e tornar o autocuidado algo divertido e social.'
    },
    {
      question: 'O Lifit é gratuito?',
      answer: 'Sim! O uso básico do Lifit é totalmente gratuito. Futuramente, poderemos oferecer recursos premium opcionais para quem quiser uma experiência ainda mais completa.'
    },
    {
      question: 'Como o aplicativo incentiva hábitos saudáveis?',
      answer: 'O Lifit usa metas diárias, desafios, recompensas e interações sociais para estimular a prática de exercícios, boa alimentação e equilíbrio emocional.'
    },
    {
      question: 'Minhas informações pessoais estão seguras?',
      answer: 'Sim. A segurança e a privacidade dos nossos usuários são prioridade. Todos os dados são protegidos e utilizados apenas para melhorar sua experiência dentro do app.'
    },
    {
      question: 'Posso interagir com outros usuários?',
      answer: 'Claro! Você pode seguir perfis, comentar, curtir publicações participar de chats privados e muito mais.'
    },
    {
      question: 'O Lifit tem acompanhamento profissional?',
      answer: 'Ainda não. Mas estamos desenvolvendo parcerias com profissionais da área de saúde e bem-estar para oferecer conteúdo e orientação verificada dentro da plataforma.'
    },
    {
      question: 'Posso compartilhar meus treinos ou refeições?',
      answer: 'Sim! Você pode postar fotos, metas ou registros das suas atividades físicas e hábitos alimentares, inspirando outras pessoas da comunidade.'
    },
    {
      question: 'Como posso reportar um problema ou bug?',
      answer: 'Você pode entrar em contato conosco diretamente pelo app, na seção “Ajuda e Suporte”, ou pelo e-mail suporte@lifit.com'
    },
    {
      question: 'Como o Lifit ajuda na saúde mental?',
      answer: 'Além de promover hábitos físicos, o Lifit também incentiva pausas, respiração, gratidão e momentos de reflexão, ajudando a cuidar da mente tanto quanto do corpo.'
    },
  ];
}
