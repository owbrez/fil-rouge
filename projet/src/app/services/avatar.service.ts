import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Avatar } from '../models/avatar';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  avatars = [];
  constructor(public httpClient:HttpClient) { 
   }

  getAvatar(){
    console.log(this.httpClient.get<Avatar[]>("http://192.168.110.127:666/avatars"));
    return this.httpClient.get<Avatar[]>("http://192.168.110.127:666/avatars");
  }
}

