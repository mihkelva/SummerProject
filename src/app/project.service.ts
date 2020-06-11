import { Project } from './new-project/project.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ProjectService {
    projectsChanged = new Subject<Project[]>();
   
    private projects: Project[] = [
        new Project(
            1,
            "Martin",
            "5512345",
            "m@m.com",
            "Projekt",
            "Lühikirjeldus",
            "Saan anda 5 euri",
            "Pole midagi lisada"
        ),
        new Project(
            2,
            "Tõnis Saluste",
            "5512345",
            "tõnis.saluste@gmail.com",
            "Projekti nimi on 'Kaks karu elavad metsas",
            "Lühikirjeldus",
            "Ei oska küsimusele kuidagi vastata",
            "Tahan teada, mitu päeva selle teostamiseks läheb."
        ),
        new Project(
            3,
            "Pets",
            "5512345",
            "suvapets@gmail.com",
            "A mul suva",
            "Lühikirjeldus",
            "Mõttetu jama",
            "Njetu."
        ),
        new Project(
            4,
            "Sirle Lill",
            "5512345",
            "sirts@gmail.com",
            "Lilleseadja",
            "Lühikirjeldus",
            "Kahjuks pole millegagi toetada",
            "-."
        ),
        new Project(
            5,
            "Kopter, Heli",
            "5512345",
            "boeing@gmail.com",
            "SpaceX",
            "Lühikirjeldus",
            "Lend Marsile igaühele",
            "Kas ülikool maksab?"
        )
    ];

    addProject(newProject: Project) {
        this.projects.push(newProject);
        this.projectsChanged.next(this.projects.slice());
    }
    
    setProjects(projects: Project[]) {
        this.projects = projects;
        this.projectsChanged.next(this.projects.slice());
    }

    getProjects() {
        return this.projects.slice();
    }

    getProject(index: number) {
        return this.projects[index];
    }

    updateProject(index: number, updatedProject: Project) {
        this.projects[index] = updatedProject;
        this.projectsChanged.next(this.projects.slice());
      }
}