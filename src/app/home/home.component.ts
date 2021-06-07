import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  intemCount!: number;
  btnText: string = 'Add an item';
  goalText: string = 'my first life goal';
  goals: Array<any> = [];

  constructor(private _data:DataService) {}

  ngOnInit(): void {
    
    this._data.goal.subscribe(res=>this.goals=res);
    this.intemCount = this.goals.length;
    this._data.changeGoal(this.goals)
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.intemCount = this.goals.length;
    this._data.changeGoal(this.goals)

  }
  removeItem(i: number){
    this.goals.splice(i,1);
    this._data.changeGoal(this.goals)
    
  }
}
