import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editForm: FormGroup;
  userRef: any

  constructor(
    public userService: UserService, public formBuilder: FormBuilder, private act: ActivatedRoute, private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['',  [Validators.required]],
      contact: ['',  [Validators.required]]
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.userService.find(id).subscribe(res => {
      this.userRef = res;
      
      this.editForm = this.formBuilder.group({
        name: [this.userRef.name],
        email: [this.userRef.email],
        contact: [this.userRef.contact]
      })      
    })

}

onSubmit() {
  const id = this.act.snapshot.paramMap.get('id');
  
  this.userService.updateUser(this.editForm.value, id);
  this.router.navigate(['list-users']);
};
}
