import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Card } from '../models/card';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(public httpClient:HttpClient) { }

  getGameState(idGame,idUser){
    return this.httpClient.get<Game>("http://192.168.110.127:666/games/"+idGame+"/state/"+idUser);
  }
}
