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
    if(this.currentUser == undefined){
      this.currentUser = {
        _id: "5bd80c75e168a83328473f5b",
        isConnected: true,
        idCurrentGame: "5bd7373bb9d58a0b3ccbcc15",
        pseudo: "Nicolas",
        positionInGame: 1,
        nbSleepingTurns: 0,
        avatar: {
        _id: "5bd73397fb31422844ba79b0",
        code: "avatar2",
        },
        nbCards: 0
    }
    return this.currentUser;
  }
}
getCurrentUserId(user:Player){
  if(this.currentUser == undefined){
    this.currentUser = {
      _id: "5bd80c75e168a83328473f5b",
      isConnected: true,
      idCurrentGame: "5bd7373bb9d58a0b3ccbcc15",
      pseudo: "Nicolas",
      positionInGame: 1,
      nbSleepingTurns: 0,
      avatar: {
      _id: "5bd73397fb31422844ba79b0",
      code: "avatar2",
      },
      nbCards: 0
  }
  return this.currentUser;
}
  return user._id;
}

  setCurrentUser(player){
    this.currentUser = player;
  }
}
