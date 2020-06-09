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

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewProject(form: NgForm) {
    var formValue = form.value;
    
    new Project(
      formValue.name, 
      formValue.phone,
      formValue.email,
      formValue.project_name,
      formValue.description,
      formValue.support,
      formValue.additional
      );
  }

  
}
