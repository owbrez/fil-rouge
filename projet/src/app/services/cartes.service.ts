import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Card } from '../models/card';


@Injectable({
  providedIn: 'root'
})
export class CartesService {

  constructor(public httpClient:HttpClient) { }

  getCartes(){
    return this.httpClient.get<Card[]>("http://192.168.110.127:666/cards");
  }
}
