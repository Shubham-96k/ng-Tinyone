import { Component, OnInit } from '@angular/core';
import { Ifooterlink, IheroIcon } from '../../model/interface';
import { footericonsarr, footerlinkarr, heroiconsarr } from '../../const/hero-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  icons : Array<IheroIcon> = footericonsarr;

  
  icons1 : Array<Ifooterlink> = footerlinkarr;
  footericon : string = 'footerlinks';

  ngOnInit(): void {
  }

}
