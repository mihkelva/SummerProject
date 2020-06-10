import { Component, OnInit } from '@angular/core';
import { Router, ResolveEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isOnNewProject: boolean = false;

  constructor(private router: Router ) { }

  ngOnInit(): void {
      this.router.events.subscribe((routerData) => {
        if(routerData instanceof ResolveEnd){ 
           if(routerData.url === '/new'){
              this.isOnNewProject=true;
           } else {
              this.isOnNewProject=false;
           }
      } 
    })
  }

  

  scroll(el: HTMLElement) {
    console.log(el);
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }


}
