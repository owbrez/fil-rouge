import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { AvatarService } from '../services/avatar.service';
import { Avatar } from '../models/avatar';
import {FormsModule} from '@angular/forms';
import { Player } from '../models/player';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  avatars: Avatar[] = [];
  pseudo:string;
  idAvatar:string;
  currentPlayer:Player;
  constructor(public connection:ConnectionService, public avatar:AvatarService, public form:FormsModule) { }

  ngOnInit() {
    this.getAvatar();
  }

  isConnected(){
    return this.connection.isConnected();
  }

  onSubmit(){
    let player = {pseudo : this.pseudo,idAvatar : this.idAvatar};
    this.connection.connect(player).subscribe(player=>{this.currentPlayer = player});
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
