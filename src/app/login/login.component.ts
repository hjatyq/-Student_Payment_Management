import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {JsonPipe} from '@angular/common';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatDivider,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatCardActions,
    MatButton,
    JsonPipe,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public loginFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthentificationService,
              private router:Router) {

  }

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control(''),

    });
  }


  login() {
    let username = this.loginFormGroup.value.username;
    let password = this.loginFormGroup.value.password;
    let auth: boolean = this.authService.login(username, password);
    if(auth==true){
      this.router.navigateByUrl("/admin")

    }
  }
}
