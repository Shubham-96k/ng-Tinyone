import { Component, OnInit } from '@angular/core';
import { IfeatureIcon } from '../../model/interface';
import { featureiconsarr } from '../../const/hero-icons';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  constructor() { }

  iconsarr : Array<IfeatureIcon> = featureiconsarr;

  ngOnInit(): void {
  }

}
