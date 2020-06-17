import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from './../../new-project/project.model';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css']
})
export class UserProjectsComponent implements OnInit {
  year = new Date().getFullYear();
  error = null;
  suunds = ['Tarkvaraarendus', "Digimeedia"];

  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private _toastService: ToastService
    ) { }

  ngOnInit(): void {
    this.projectService.fetchProjects().subscribe(projects => {
      let allProjects = projects;
      this.projects = allProjects.map(prj => ({...prj, 
        addInfoButtonActive: false, 
        registrationButtonActive: false, 
        students: prj.students ? prj.students : [] }));
      console.log(this.projects);
    }, error => {
      this.error = error;
    });
  }

  showCommentInfo(project) {
    project.addInfoButtonActive = !project.addInfoButtonActive;
    console.log(project);
  }

  showRegisterButton(project) {
    project.registrationButtonActive = !project.registrationButtonActive;
    console.log(project);
  }

  onSubmitInfo(project: Project, form: NgForm) {
    console.log(form);
    this._toastService.success('Projekt edukalt lisatud');
    form.value.reset();
  }

  onSubmitRegistration(project: Project, form: NgForm) {
    console.log(form);
    this._toastService.success('Projekt edukalt lisatud');
    form.value.reset();
  }
  
}
