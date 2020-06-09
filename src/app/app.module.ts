import { DataStorageService } from './database/data-storage.service';
import { ProjectService } from './project.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    AdminProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [ProjectService, DataStorageService, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
