import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/new-project/project.model';

@Component({
  selector: 'app-admin-projects-new',
  templateUrl: './admin-projects-new.component.html',
  styleUrls: ['./admin-projects-new.component.css']
})
export class AdminProjectsNewComponent implements OnInit {

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
    this.projectService.addProject(newProject);
  }
}
