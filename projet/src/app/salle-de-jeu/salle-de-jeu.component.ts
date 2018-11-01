import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { Avatar } from '../models/avatar';
import { Player } from '../models/player';
import { Card } from '../models/card';
import { Game } from '../models/game';

import { ConnectionService } from '../services/connection.service';
import { AvatarService } from '../services/avatar.service';
import { GlobalService } from '../services/global.service';
import { CartesService } from '../services/cartes.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-salle-de-jeu',
  templateUrl: './salle-de-jeu.component.html',
  styleUrls: ['./salle-de-jeu.component.scss']
})
export class SalleDeJeuComponent implements OnInit {
  lesCartes:Card[];
  lesCartesDuJoueur:Card[];
  laPartieEnCours:Game;
  constructor(public connection:ConnectionService, public avatar:AvatarService, public form:FormsModule, 
    public global:GlobalService, public router:Router, public cartes:CartesService, public game:GameService,) { }

  ngOnInit() {
    this.getCards();
    this.getGameState();
    this.getPlayerCards(this.laPartieEnCours);
  }

  getCards(){    
    this.cartes.getCartes().subscribe(cartes=>{
      this.lesCartes = cartes;
    });
  }

  getGameState(){
    let idUser = this.global.getCurrentUserId(this.global.currentUser);
    let idPartie = '5bd7373bb9d58a0b3ccbcc15';
    this.game.getGameState(idPartie,idUser).subscribe(game=>{
      this.laPartieEnCours = game;
    });
  }
  getPlayerCards(game){
    
  }

}
