## Veebileht tarkvaraprojektide toetuseks

Oleme Tallinna Ülikooli informaatika tudengid, kes tegid selle tarkvara aine Tarkvaraarenduse praktika raames. Valisime oma praktikaks teha veebileht selle aine tarvis.

Veebileht annab võimaluse inimestel esitada oma projektiideed ning tudengitele neid teostada. Õppejõule, kes projektiga tegeleb, on tegu rakendusega, mis projektide valimise oluliselt kergemaks teeb. Kogudes kõik ideed ning saates need ka automaatselt meilile, saab kõik ühest kohast. Samuti kogub ta varasemaid projekte ning arhiveerib nad. Tudeng saab end rühmadesse registreerida siinsamas lehel.

Projekti koostasid:
1. Mihkel Vaher
2. Kristjan Luur
3. Cornelia Tšaplõgin

----------------------------------------------------------------------------------------------------------------

# SummerProject

Projekt on koostatud Angulari versioon 9.1.6 abil ja kasutatud on Firebase andmebaasi (database), serverit (hosting) ja autentikeerimist (authentication).

## Kasutatud tehnoloogiad

Angular versioon 9.1.6
Firebase (firebase.google.com)
NodeJS 12.18.1

Angulari teegid:
@ks89 hammerjs mousetrap - karusell-galerii jaoks
animations material cdk - FAQ jaoks
@nicky-lenaers g2-sticky-nav - menüü kerimise jaoks

### Kasutamine veebis

Mine veebisaidile summerproject.web.app ja kasuta :)

#### Kasutamine lokaalselt

Lae alla repositoorium: git clone https://github.com/mihkelva/SummerProject.git
Lae alla nodejs: https://nodejs.org/en/
Lae alla nodejs teegid: npm install
Installi Angular: npm install -g @angular/cli
Pane käima lokaalne server käima käsuga: "ng serve" , see peab olema tehtud samas kaustas kus angular.json paikneb (ehk root)
Kasuta pordil: localhost:4200

#### Projekti uuendamine Firebase serveris

Installi Firebase: npm install -g firebase-tools
Logi sisse: firebase login
Buildi Angulari projekt Firebase jaoks: ng build --prod
Deploy projekt Firebase'i: firebase deploy --except functions
