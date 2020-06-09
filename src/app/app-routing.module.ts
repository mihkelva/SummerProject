import { HomeComponent } from './home/home.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AdminComponent } from './admin/admin.component';
import { AdminProjectsComponent } from './admin/admin-projects/admin-projects.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'new', component: NewProjectComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'admin/projects', component: AdminProjectsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}