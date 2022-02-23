import { Component, OnInit } from '@angular/core';
import { foods } from '../foods';
import { Imenu } from '../menu';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  foods : Imenu [] = foods;
  constructor() { }

  ngOnInit(): void {
  }

}
