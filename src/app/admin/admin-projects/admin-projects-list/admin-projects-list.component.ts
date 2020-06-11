import { ActivatedRoute } from '@angular/router';
import { Project } from './../../../new-project/project.model';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-admin-projects-list',
  templateUrl: './admin-projects-list.component.html',
  styleUrls: ['./admin-projects-list.component.css']
})
export class AdminProjectsListComponent implements OnInit {
  projects: Project[] = [];
  questionNeeded = false;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    console.log(this.projects);
  }

  onAddQuestion() {
    console.log("hi");
  }

  onQuestionNeeded() {
    this.questionNeeded = !this.questionNeeded;
  }

  onProjectInfo() {
    console.log("project info appears");
  }

  onChangeProject() {
    console.log("change project appears")
  }
}
