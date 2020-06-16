import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/new-project/project.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-projects-new',
  templateUrl: './admin-projects-new.component.html',
  styleUrls: ['./admin-projects-new.component.css']
})
export class AdminProjectsNewComponent implements OnInit, OnDestroy {
  private errorSub: Subscription;
  error: String;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.errorSub = this.projectService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })
  }

  onAddNewProject(form: NgForm) {
    const formValue = form.value;
    const newProject = new Project(
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

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
