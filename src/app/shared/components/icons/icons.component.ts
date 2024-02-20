import { Component, Input, OnInit } from '@angular/core';

import { Ifooterlink, IheroIcon } from '../../model/interface';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor() { }

  @Input() geticon !: Array<IheroIcon>;

  @Input() geticon2 !: Array<Ifooterlink>;
 
  @Input() iconclass : string = "heroicon";

  ngOnInit(): void {
    
  }

}
