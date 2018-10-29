import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public connection:ConnectionService) { }

  ngOnInit() {

  }

  isConnected(){
    return this.connection.isConnected();
  }

  connect(){
    this.connection.connect();
  }

  disconnect(){
    this.connection.disconnect();
  }

}
