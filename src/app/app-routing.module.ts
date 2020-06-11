import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AdminComponent } from './admin/admin.component';
import { AdminProjectsComponent } from './admin/admin-projects/admin-projects.component';
import { UserProjectsComponent } from './user/user-projects/user-projects.component';
import { AdminProjectsListComponent } from './admin/admin-projects/admin-projects-list/admin-projects-list.component';
import { AdminProjectsDetailComponent } from './admin/admin-projects/admin-projects-list/admin-projects-detail/admin-projects-detail.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'new', component: NewProjectComponent},
    {path: 'user', component: UserComponent},
    {path: 'user/projects', component: UserProjectsComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'admin/projects', component: AdminProjectsListComponent },
    {path: 'admin/projects/:id', component: AdminProjectsDetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}