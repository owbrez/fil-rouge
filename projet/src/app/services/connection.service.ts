import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Avatar } from '../models/avatar';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private connected:boolean;
  public currentPlayer:Player;
  isConnected(){
    return this.connected;
  }

  connect(player){ 
    return this.httpClient.post<Player>("http://192.168.110.127:666/login",player);    
  }

  disconnect(){
    this.connected = false;
  }

  constructor(public httpClient:HttpClient) { }
}
