import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { AvatarService } from '../services/avatar.service';
import { Avatar } from '../models/avatar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  avatars: Avatar[] = [];
  constructor(public connection:ConnectionService, public avatar:AvatarService) { }

  ngOnInit() {
    this.getAvatar();
  }

  isConnected(){
    return this.connection.isConnected();
  }

  connect(){
    this.connection.connect();
  }

  disconnect(){
    this.connection.disconnect();
  }

  getAvatar(){
    this.avatar.getAvatar().subscribe(avatars=>{
      this.avatars = avatars;
    });
  }

}
