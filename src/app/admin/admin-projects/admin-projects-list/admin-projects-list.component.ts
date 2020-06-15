import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from './../../../new-project/project.model';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-projects-list',
  templateUrl: './admin-projects-list.component.html',
  styleUrls: ['./admin-projects-list.component.css']
})
export class AdminProjectsListComponent implements OnInit {
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
    // let allProjects = this.projectService.getProjects();
    // this.projects = allProjects.map(function(el) {
    //   var o = Object.assign({}, el);
    //   o.commentButtonActive = false;
    //   return o;
    // });

    // this.projects = allProjects.map(v => ({...v, commentButtonActive: false}))
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
    // console.log(itemQuestion);
    this.projects.forEach(pr => {
      if (pr == project) {
        console.log(pr);
        console.log(project);
        console.log(project.comments);
        pr.comments.push(itemQuestion);
        console.log(project.comments);
        console.log(this.projects);
      }
    })
  }

  onProjectInfo() {
    console.log("project info appears");
  }

  onChangeProject(project) {
  }
}
