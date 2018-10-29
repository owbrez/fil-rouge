import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Avatar } from '../models/avatar';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private connected:boolean;

  isConnected(){
    return this.connected;
  }

  connect(){ 
    this.connected = true;
  }

  disconnect(){
    this.connected = false;
  }

  constructor() { }
}
