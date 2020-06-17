import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from './../../../new-project/project.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-projects-list',
  templateUrl: './admin-projects-list.component.html',
  styleUrls: ['./admin-projects-list.component.css']
})
export class AdminProjectsListComponent implements OnInit, OnDestroy {
  projects: Project[] = [];
  questionNeeded = false;
  isFetching = false;
  error = null;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.projectService.fetchProjects().subscribe(projects => {
      this.isFetching = false;
      let allProjects = projects;
      this.projects = allProjects.map(prj => ({...prj, commentButtonActive: false, comments: prj.comments ? prj.comments : []}))
    }, error => {
      this.isFetching = false;
      this.error = error;
    });
  }

  showCommentAdd(project) {
    project.commentButtonActive = !project.commentButtonActive;
  }

  onAddQuestion(project, form: NgForm) {
    const itemQuestion = form.value.itemQuestion;
    this.projects.forEach(pr => {
      if (pr == project) {
        pr.comments.push(itemQuestion);
      }
    });
  }

  onDeleteComment(project, index: number) {
    this.projects.forEach(pr => {
      if (pr == project) {
        pr.comments.splice(index, 1);
      }
    });
  }

  ngOnDestroy(): void {
    this.projectService.saveProjects(this.projects);
  }
}
