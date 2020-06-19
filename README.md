## Veebileht tarkvaraprojektide toetuseks

Oleme Tallinna Ülikooli informaatika tudengid, kes tegid selle tarkvara aine Tarkvaraarenduse praktika raames. Valisime oma praktikaks teha veebileht selle aine tarvis.

Veebileht annab võimaluse inimestel esitada oma projektiideed ning tudengitele neid teostada. Õppejõule, kes projektiga tegeleb, on tegu rakendusega, mis projektide valimise oluliselt kergemaks teeb. Kogudes kõik ideed ning saates need ka automaatselt meilile, saab kõik ühest kohast. Samuti kogub ta varasemaid projekte ning arhiveerib nad. Tudeng saab end rühmadesse registreerida siinsamas lehel.

Projekti koostasid:
1. Mihkel Vaher
2. Kristjan Luur
3. Cornelia Tšaplõgin


<img src="./pilt.JPG" alt="pilt" width="800" height="360">

----------------------------------------------------------------------------------------------------------------

# SummerProject

Projekt on koostatud Angulari versioon 9.1.6 abil ja kasutatud on Firebase andmebaasi (database), serverit (hosting) ja autentiseerimist (authentication).

## Kasutatud tehnoloogiad

1. Angular versioon 9.1.6
2. Firebase (firebase.google.com)
3. NodeJS 12.18.1

Angulari teegid:
1. @ks89 hammerjs mousetrap - karusell-galerii jaoks
2. animations material cdk - FAQ jaoks
3. @nicky-lenaers g2-sticky-nav - menüü kerimise jaoks

## Kasutamine veebis

Mine veebisaidile summerproject.web.app ja kasuta :)

## Kasutamine lokaalselt

1. Lae alla repositoorium: git clone https://github.com/mihkelva/SummerProject.git
2. Lae alla nodejs: https://nodejs.org/en/
3. Lae alla nodejs teegid: npm install
4. Installi Angular: npm install -g @angular/cli
5. Pane käima lokaalne server käima käsuga: "ng serve" , see peab olema tehtud samas kaustas kus angular.json paikneb (ehk root)
6. Kasuta pordil: localhost:4200

## Projekti uuendamine Firebase serveris

1. Installi Firebase: npm install -g firebase-tools
2. Logi sisse: firebase login
3. Buildi Angulari projekt Firebase jaoks: ng build --prod
4. Deploy projekt Firebase'i: firebase deploy --except functions


<a href="./LICENSE.txt">MIT LICENSE</a>
