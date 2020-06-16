import { Project } from './new-project/project.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable()
export class ProjectService {
    projectsChanged = new Subject<Project[]>();
    error = new Subject<string>();;

    constructor(private http: HttpClient){}

    private projects: Project[] = [];

    // addProject(newProject: Project) {
    //     this.projects.push(newProject);
    //     this.projectsChanged.next(this.projects.slice());
    // }
    
    // setProjects(projects: Project[]) {
    //     this.projects = projects;
    //     this.projectsChanged.next(this.projects.slice());
    // }

    // updateProject(index: string, updatedProject: Project) {
    //     this.projects[index] = updatedProject;
    //     this.projectsChanged.next(this.projects.slice());
    // }

    getProjects() {
      return this.projects.slice();
    }

    getProject(index: string) {
        return this.projects.find(project => project.firebaseId === index);
    }

    uploadProject(newProject: Project) {
        this.http.post('https://summerproject-d48ac.firebaseio.com/projects.json', newProject).subscribe(
        responseData => {
          console.log(responseData);
        }),
        error => {
            this.error.next(error.message);
        }
        //end
    }

    fetchProjects() {
        return this.http.get<{ [key: string]: Project }>('https://summerproject-d48ac.firebaseio.com/projects.json')
            // .pipe((map(projects => {
            //     return projects.map(project => {
            //         return {...project, comments: project.comments ? project.comments : []}
            //     })
            // })))
            .pipe(map(responseData=> {
              const projectsArray: Project[] = [];
              for (const key in responseData) {
                if(responseData.hasOwnProperty(key)) {
                  projectsArray.push({ ...responseData[key], firebaseId: key})
                }
              }
              this.projects = projectsArray;
              return projectsArray;
            }));
    }

    saveProjects(projects) {
      this.http.put(
          'https://summerproject-d48ac.firebaseio.com/projects.json',
          projects)
      .subscribe(response => {
          console.log(response);
      });
    }
}