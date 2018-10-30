import { Injectable } from '@angular/core';
import{ Game} from "../models/game";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LespartiesService {

  constructor(private http:HttpClient) {


  }

  getParties(){
    return this.http.get<Game[]>('http://192.168.110.127:666/games/not-started')
  }
}

