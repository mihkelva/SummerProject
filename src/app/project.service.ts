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
        ),
        new Project(
            "Tõnis Saluste",
            "5512345",
            "tõnis.saluste@gmail.com",
            "Projekti nimi on 'Kaks karu elavad metsas",
            "Lühikirjeldus",
            "Ei oska küsimusele kuidagi vastata",
            "Tahan teada, mitu päeva selle teostamiseks läheb."
        ),
        new Project(
            "Pets",
            "5512345",
            "suvapets@gmail.com",
            "A mul suva",
            "Lühikirjeldus",
            "Mõttetu jama",
            "Njetu."
        ),
        new Project(
            "Sirle Lill",
            "5512345",
            "sirts@gmail.com",
            "Lilleseadja",
            "Lühikirjeldus",
            "Kahjuks pole millegagi toetada",
            "-."
        ),
        new Project(
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