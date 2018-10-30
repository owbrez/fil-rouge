import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { AvatarService } from '../services/avatar.service';
import { Avatar } from '../models/avatar';
import {FormsModule} from '@angular/forms';
import { Player } from '../models/player';
import { GlobalService } from '../services/global.service'
import { Router } from '@angular/router';

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
  constructor(public connection:ConnectionService, public avatar:AvatarService, public form:FormsModule, 
    public global:GlobalService, public router:Router) { }

  ngOnInit() {
    this.getAvatar();
  }

  isConnected(){
    return this.connection.isConnected();
  }

  onSubmit(){
    let player = {pseudo : this.pseudo,idAvatar : this.idAvatar};
    this.connection.connect(player).subscribe(player=>{this.global.setCurrentUser(player); this.router.navigate(['/listes-des-parties']);});
    
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
