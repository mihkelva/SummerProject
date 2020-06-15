import { AuthService, AuthResponseData } from './../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignUp(signupForm) {
    if (!signupForm.valid) {
      return;
    }
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;

    authObs = this.authService.signUp(signupForm.value.username, signupForm.value.password);
    
    authObs.subscribe(resData => {
        console.log(resData);
        this.isLoading = false;
    }, error => {
      this.error = error;
      this.isLoading = false;
    });
    signupForm.reset();
  }

}
