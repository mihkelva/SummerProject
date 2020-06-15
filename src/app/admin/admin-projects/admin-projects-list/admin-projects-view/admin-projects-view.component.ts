import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Project } from 'src/app/new-project/project.model';

@Component({
  selector: 'app-admin-projects-view',
  templateUrl: './admin-projects-view.component.html',
  styleUrls: ['./admin-projects-view.component.css']
})
export class AdminProjectsViewComponent implements OnInit {
  project: Project;
  id: string;

  editMode = false;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.project = this.projectService.getProject(this.id);
          this.editMode = params['id'] != null;
        }
    )
  }

}
