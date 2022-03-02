import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  Users = [];
  user : User
  constructor(private userService: UserService) { }

  ngOnInit() {

    //  this is use for get the all data from database and show in table
    this.userService.getUserList().subscribe(res => {
      this.Users = res.map( Response => {
        return {
          id: Response.payload.doc.id,
          ...Response.payload.doc.data() as {}
        } as User;
      })
    });    
  }

  
  removeUser(user){
    this.userService.deleteUser(user);

  }
}
