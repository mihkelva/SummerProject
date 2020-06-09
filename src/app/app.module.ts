import { DataStorageService } from './database/data-storage.service';
import { ProjectService } from './project.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { GalleryModule } from '@ks89/angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************

// ************************ optional font-awesome 5 ************************
// to install use both `npm i --save @fortawesome/fontawesome-svg-core` and `npm i --save @fortawesome/free-solid-svg-icons`
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt, faPlus, faTimes, faDownload } from '@fortawesome/free-solid-svg-icons';
library.add(faExternalLinkAlt, faPlus, faTimes, faDownload);
//dom.watch(); // Kicks off the process of finding <i> tags and replacing with <svg>
// *************************************************************************

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkDoneComponent } from './work-done/work-done.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { NewProjectComponent } from './new-project/new-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkDoneComponent,
    AboutUsComponent,
    ContactComponent,
    ProjectFormComponent,
    AdminComponent,
    MenuComponent,
    NewProjectComponent
  ],
  imports: [
    GalleryModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProjectService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
