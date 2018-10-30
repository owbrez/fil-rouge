import { Injectable } from '@angular/core';
import { ConnectionService } from './connection.service';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  currentUser:Player;
  constructor(connection:ConnectionService) {}
  getCurrentUser(){
    return this.currentUser;
  }
  setCurrentUser(player){
    this.currentUser = player;
  }
}
