import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { IUserData, IUsers } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['../../../form-style.css', './edit-users.component.css'],
})
export class EditUsersComponent implements OnInit {
  users: IUsers;
  currentUser: IUserData;

  constructor(
    public userService: UserService,
    public firebaseService: FirebaseService
  ) {
    this.getData();
  }

  ngOnInit(): void {}

  getData() {
    this.firebaseService.getUsers().subscribe((result) => {
      this.users = result;
      this.currentUser = this.userService.currentUser;
    });
  }

  removeAdminHandler(userId, email) {
    this.firebaseService.removeAdmin(userId, email);
  }

  addAdminHandler(userId, email) {
    this.firebaseService.addAdmin(userId, email);
  }
}
