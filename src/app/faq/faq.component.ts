import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FaqItem} from '@angular-material-extensions/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

<<<<<<< HEAD
=======
  

>>>>>>> 447b0458f0db272955f181d9a68948d1e4825130
  constructor() { }

  ngOnInit(): void {
  }

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

  faq: FaqItem[] = [];
<<<<<<< HEAD

  onNewFaqItem(faqItem: FaqItem) {
    console.log('on new faqItem -> ', faqItem);
    this.faq.splice(0, 0, faqItem);
    this.list.push(faqItem);
  }
=======
  
  onNewFaqItem(faqItem: FaqItem) {
      console.log('on new faqItem -> ', faqItem);
      this.faq.splice(0, 0, faqItem);
    }
  
>>>>>>> 447b0458f0db272955f181d9a68948d1e4825130

}
