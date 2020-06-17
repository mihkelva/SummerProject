import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProjectService } from 'src/app/project.service';
import { Project } from './../../../../new-project/project.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-projects-detail',
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.css']
})
export class ProjectsDetailComponent implements OnInit {
  projects: Project[];
  project: Project;
  id: string;
  error: string;

  editMode = false;
  projectForm: FormGroup;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          // this.project = this.projectService.getProject(this.id);
          this.editMode = params['id'] != null;

        }
    )
    this.projectService.fetchProjects().subscribe(projects => {
      this.projects = projects;
      this.project = this.projects.find(project => project.firebaseId === this.id);
      this.initForm();
    }, error => {
      this.error = error;
    });
  }

  initForm() {
    let projectName = '';
    let projectDescription = '';
    let additional = "";
    let support = "";
    let contactName = "";
    let contactPhone = "";
    let contactEmail = "";

    const project = this.projectService.getProject(this.id);
    projectName = project.name;
    projectDescription = project.description;
    additional = project.additional;
    support = project.support;
    contactName = project.contactName;
    contactEmail = project.contactEmail;
    contactPhone = project.contactPhone;

    this.projectForm = new FormGroup({
      contactName: new FormControl(contactName, Validators.required),
      contactEmail: new FormControl(contactEmail, Validators.required),
      contactPhone: new FormControl(contactPhone),
      name: new FormControl(projectName, Validators.required),
      description: new FormControl(projectDescription, Validators.required),
      support: new FormControl(support),
      additional: new FormControl(additional),
      overviewer: new FormControl()
    })
  }

  onSubmit() {
    this.projectForm.value.id = this.id;
    this.projectService.updateProject(this.id, this.projectForm.value);
    this.router.navigate(['/admin/projects'], {relativeTo: this.route});
  }

}
