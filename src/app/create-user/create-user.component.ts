import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(public userService: UserService, public formBuilder: FormBuilder, public router: Router
  ) { 
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['',  [Validators.required, Validators.email]],
      contact: ['',  [Validators.required]]
    })      
  }

  ngOnInit(): void {
  }

  get f(){
    return this.userForm.controls;
  }


  onSubmit() {
    this.userService.createUser(this.userForm.value);
    this.router.navigate(['list-users']); 
   };
}
