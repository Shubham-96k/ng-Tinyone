import { Component, Input, OnInit } from '@angular/core';
import { IfeatureIcon } from '../../model/interface';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {

  constructor() { }

  @Input() getfeaticon !: IfeatureIcon;

  ngOnInit(): void {
  }

}
