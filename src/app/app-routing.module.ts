import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AdminComponent } from './admin/admin.component';
import { UserProjectsComponent } from './user/user-projects/user-projects.component';
import { AdminProjectsListComponent } from './admin/admin-projects/admin-projects-list/admin-projects-list.component';
import { AdminProjectsDetailComponent } from './admin/admin-projects/admin-projects-list/admin-projects-detail/admin-projects-detail.component';
import { AdminProjectsNewComponent } from './admin/admin-projects/admin-projects-list/admin-projects-new/admin-projects-new.component';
import { FaqAddComponent } from './admin/faq-add/faq-add.component';
import { PreviousProjectsComponent } from './admin/previous-projects/previous-projects.component';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'new', component: NewProjectComponent},
    {path: 'user', component: UserComponent},
    {path: 'user/projects', component: UserProjectsComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'admin/projects', component: AdminProjectsListComponent },
    {path: 'admin/projects/new', component: AdminProjectsNewComponent },
    {path: 'admin/projects/edit/:id', component: AdminProjectsDetailComponent },
    {path: 'admin/projects/view/:id', component: AdminProjectsDetailComponent },
    {path: 'admin/faq', component: FaqAddComponent },
    {path: 'admin/previous', component: PreviousProjectsComponent },
    {path: '**', redirectTo: '/home' },
    {path: '', redirectTo: '/home',
    pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}