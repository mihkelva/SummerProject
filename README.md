# SummerProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

----------------------------------------------------------------------------------------------------------------
## Veebileht tarkvaraprojektide toetuseks juhend

Oleme Tallinna Ülikooli informaatika tudengid, kes tegid selle tarkvara aine Tarkvaraarenduse praktika raames. Valisime oma praktikaks teha veebileht selle aine tarvis.

Veebileht annab võimaluse inimestel esitada oma projektiideed ning tudengitele neid teostada. Õppejõule, kes projektiga tegeleb, on tegu rakendusega, mis projektide valimise oluliselt kergemaks teeb. Kogudes kõik ideed ning saates need ka automaatselt meilile, saab kõik ühest kohast. Samuti kogub ta varasemaid projekte ning arhiveerib nad. Tudeng saab end rühmadesse registreerida siinsamas lehel.

Projekti koostasid:
1. Mihkel Vaher
2. Kristjan Luur
3. Cornelia Tšaplõgin

### Karusell-galerii
Requires:
```
Angular (version 5 or higher)
rxjs-compat if using Angular >=6
rxjs 5.0.0 or higher
```

``````
npm install rxjs-compat
npm install rxjs
npm install --save @ks89/angular-modal-gallery
npm install --save hammerjs mousetrap @angular/cdk
npm install --save-dev @types/mousetrap @types/hammerjs
npm i angular-modal-gallery
``````
### FAQ
Requires:
`````
angular flex-layout v7.x
angular material v7.x
angular cdk v7.x
angular animations v7.x
angular forms v7.x
`````
`````
npm i @angular/cdk @angular/material @angular/flex-layout @angular/animations @angular/forms
npm i -s material-design-icons
ng add @angular/material
npm i -s material-design-icons
npm install -s @angular-material-extensions/faq
`````
### MENU
Requires:
`````
npm install @nicky-lenaers/ngx-scroll-to
npm install ng2-sticky-nav --save
`````

Update the imports in node_modules/@angular-material-extensions/faq/esm2015/faq.js
``````
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
``````
