import { ProjectService } from './../project.service';
import { Project } from './project.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  // projectForm: FormGroup;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  onAddNewProject(form: NgForm) {
    const formValue = form.value;
    const newProject = new Project(
      this.projectService.getProjects().length+1,
      formValue.name, 
      formValue.phone,
      formValue.email,
      formValue.project_name,
      formValue.description,
      formValue.support,
      formValue.additional
      );
      this.projectService.uploadProject(newProject);
  }

  
}
