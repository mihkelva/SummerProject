import { Contact } from './contact.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FaqItem } from '@angular-material-extensions/faq';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm) {
    var formValue = form.value;

    new Contact(
      formValue.name, 
      formValue.email, 
      formValue.phone, 
      formValue.subject, 
      formValue.message)
  }

  list: FaqItem[] = [
    {
          question: 'Mis õppeaine see on?',
          answer: 'Tegu on Tallinna ülikooli õppeainega Tarkvaraarenduse projekt (IFI6231.DT), mis on kohustuslik kõigile informaatikat õppivatele tudengitele.'
        },
        {
          question: 'Mis on selle õppeaine eesmärk?',
          answer: 'Üliõpilased moodustavad tarkvaraarenduse meeskonnad, kelle ülesandeks on toimiva tarkvara või selle osa arendamine alates nõuete väljaselgitamisest kuni testimiseni ning loovad tarkvaraarenduse tehiseid. Iga üliõpilane täidab arendusprotsessis rohkem kui ühte rolli. Üliõpilane reflekteerib oma kogemust ning õpib läbi tegevuse.'
        },
        {
          question: 'Kas iga projekt leiab teostaja?',
          answer: 'Kahjuks me seda garanteerida ei saa. Aine vastutatav õppejõud kontollib kõik ideed üle ning valib sellised, mis oleksid kooskõlas tudengite võimekuse ja aine mahuga.'
        },
        {
          question: 'Kas ka firmana võib projekti esitada?',
          answer: 'Võib, kuid siinkohal on tähtis meeles pidada, et tudengid ei ole vaid odav tööjõud. Kuna tegu on õppeprotsessiga peab olema valmis neid õppeaasta vältel toetama.'
        },
        {
          question: 'Kuidas ma tudengit toetama pean?',
          answer: 'Tudengitel on poolaasta vältel erinevad aineid, kus tuleb testida prototüüpe, teha persoonasid, koostada infosüsteeme ning selle kooskõlastamisel Sinu ideega vajavad nad abi- suunamise, suhtluse ja toetuse näol.'
        },
        {
          question: 'Kas ma peaksin kartma, et minu idee ära varastatakse?',
          answer: 'Ei, Tallinna Ülikool on hariduslik asutus ning õppeaine eesmärk on pakkuda õpilastele praktikat, mitte kasutada ideid ärilistel eesmärkidel.'
        }
  ];

  faq: FaqItem[] = [];

  onNewFaqItem(faqItem: FaqItem) {
    console.log('on new faqItem -> ', faqItem);
    this.faq.splice(0, 0, faqItem);
    this.list.push(faqItem);
  }

}
