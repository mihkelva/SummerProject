import { NewUserComponent } from './admin/admin-users/new-user/new-user.component';
import { UsersListComponent } from './admin/admin-users/users-list/users-list.component';
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
import { AdminProjectsViewComponent } from './admin/admin-projects/admin-projects-list/admin-projects-view/admin-projects-view.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'new', component: NewProjectComponent},
    {path: 'user', component: UserComponent},
    {path: 'user/projects', component: UserProjectsComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'admin/projects', component: AdminProjectsListComponent, canActivate: [AuthGuard] },
    {path: 'admin/projects/new', component: AdminProjectsNewComponent, canActivate: [AuthGuard] },
    {path: 'admin/projects/edit/:id', component: AdminProjectsDetailComponent, canActivate: [AuthGuard] },
    {path: 'admin/projects/view/:id', component: AdminProjectsViewComponent, canActivate: [AuthGuard] },
    {path: 'admin/faq', component: FaqAddComponent, canActivate: [AuthGuard] },
    {path: 'admin/previous', component: PreviousProjectsComponent, canActivate: [AuthGuard] },
    {path: 'admin/users', component: AdminUsersComponent, canActivate: [AuthGuard] },
    {path: 'admin/users/list', component: UsersListComponent, canActivate: [AuthGuard] },
    {path: 'admin/users/new', component: NewUserComponent, canActivate: [AuthGuard] },
    {path: '**', redirectTo: '/home' },
    {path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}