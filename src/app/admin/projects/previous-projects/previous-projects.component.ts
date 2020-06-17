import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from 'src/app/new-project/project.model';
import { ProjectService } from 'src/app/project.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-previous-projects',
  templateUrl: './previous-projects.component.html',
  styleUrls: ['./previous-projects.component.css']
})
export class PreviousProjectsComponent implements OnInit, OnDestroy {
  projects: Project[] = [];
  isFetching = false;
  error = null;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.projectService.fetchProjects().subscribe(projects => {
      this.isFetching = false;
      this.projects = projects;
    }, error => {
      this.isFetching = false;
      this.error = error;
    });
  }

  ngOnDestroy(): void {
    this.projectService.saveProjects(this.projects);
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

  onChangeProject(project) {
  }

  onDeleteComment(project, index: number) {
    this.projects.forEach(pr => {
      if (pr == project) {
        pr.comments.splice(index, 1);
      }
    });
  }

}
