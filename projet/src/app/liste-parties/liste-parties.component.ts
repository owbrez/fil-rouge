import { Component, OnInit } from '@angular/core';
import {Avatar} from "../models/avatar";
import {HttpClient} from "@angular/common/http";
import {ConnectionService} from "../services/connection.service";
import {LoginComponent} from "../login/login.component";
import {Game} from "../models/game";
import {LespartiesService} from "../services/lesparties.service";



@Component({
  selector: 'app-liste-parties',
  templateUrl: './liste-parties.component.html',
  styleUrls: ['./liste-parties.component.scss']
})
export class ListePartiesComponent implements OnInit {

  private listePartie:Game[] = [];

  constructor( public listePartieService:LespartiesService ) {

  }


  ngOnInit() {
    this.listePartieService.getParties().subscribe(games=>{
      this.listePartie = games;
    })
  }


}
