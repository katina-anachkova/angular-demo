import { Component, OnInit } from '@angular/core';
import { Game } from '../domain/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games: Array<Game>
  isShown: boolean = false;

  constructor() {
    this.games = [{ id: 1, title: 'abc', image: 'https://softuni.bg/Content/images/open-graph/university-default-og.png' }, { id: 2, title: 'DEF', image: 'https://softuni.bg/Content/images/open-graph/university-default-og.png' }]
  }

  showContacts() {
    this.isShown  = !this.isShown ; 
  }

  showName (name: string){
    console.log(name)
  }

  ngOnInit(): void {
  }

}
