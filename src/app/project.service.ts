import { Project } from './new-project/project.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

    private projects: Project[] = [
        new Project(
            "Martin",
            "5512345",
            "m@m.com",
            "Projekt",
            "Lühikirjeldus",
            "Saan anda 5 euri",
            "Pole midagi lisada"
        )
    ];

    addProject(newProject: Project) {
        console.log(this.projects);
        console.log(newProject);
        this.projects.push(newProject);
        console.log(this.projects)
    }
    
    setProjects(projects: Project[]) {
        this.projects = projects;
    }

    getProjects() {
        return this.projects.slice();
    }
}