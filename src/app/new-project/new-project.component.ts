import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';

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

  onAddNewProject() {
    console.log("Töötab");
  }

  
}
