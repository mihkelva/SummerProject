import { DataStorageService } from './database/data-storage.service';
import { ProjectService } from './project.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFaqModule } from '@angular-material-extensions/faq';
import {MatDividerModule} from '@angular/material/divider';

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
import { AdminProjectsComponent } from './admin/admin-projects/admin-projects.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { UserProjectsComponent } from './user/user-projects/user-projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminProjectsListComponent } from './admin/admin-projects/admin-projects-list/admin-projects-list.component';
import { AdminProjectsDetailComponent } from './admin/admin-projects/admin-projects-list/admin-projects-detail/admin-projects-detail.component';
import { AdminProjectsViewComponent } from './admin/admin-projects/admin-projects-list/admin-projects-view/admin-projects-view.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FaqAddComponent } from './admin/faq-add/faq-add.component';
import { PreviousProjectsComponent } from './admin/previous-projects/previous-projects.component';

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
    NewProjectComponent,
    AdminProjectsComponent,
    FooterComponent,
    UserComponent,
    UserProjectsComponent,
    AdminProjectsListComponent,
    AdminProjectsDetailComponent,
    AdminProjectsViewComponent,
    FaqAddComponent,
    PreviousProjectsComponent,
  ],
  imports: [
    GalleryModule.forRoot(),
    MatFaqModule.forRoot(),
    ScrollToModule.forRoot(),
    MatDividerModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFaqModule
    
  ],
  providers: [ProjectService, DataStorageService, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
