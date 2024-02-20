import { Component, OnInit } from '@angular/core';
import { IheroIcon } from '../../model/interface';
import { heroiconsarr } from '../../const/hero-icons';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent implements OnInit {

  constructor() { }

  iconsArr : Array<IheroIcon> = heroiconsarr;

  ngOnInit(): void {
  }

}
