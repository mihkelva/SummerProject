import { Injectable } from '@angular/core';
import { FaqItem } from '@angular-material-extensions/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor() { }

  list: FaqItem[] = [
    {
          question: 'Why does it think the jQuery plugin is missing?',
          answer: 'Remember: load jQuery before AngularJS if you are using jQuery plugins!'
        },
        {
          question: 'How do I access the DOM from a controller?',
          answer: 'DO NOT perform DOM selection/traversal from the controller. The HTML hasn\'t rendered yet. Look up \'directives\'.'
        }
  ];

  newFaqItem(faqItem: FaqItem) {
    this.list.push(faqItem);
  }

  getFaqItems(): FaqItem[] {
      return this.list.slice();
  }
}
