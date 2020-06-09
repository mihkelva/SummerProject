import { Project } from './../../new-project/project.model';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.css']
})
export class AdminProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    console.log(this.projects);
  }

  
}
