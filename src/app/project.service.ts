import { Project } from './project.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

    private projects: Project[] = []
    
    setProjects(projects: Project[]) {
        this.projects = projects;
    }

    getProjects() {
        this.projects.slice();
    }
}