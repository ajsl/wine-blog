import { Component, OnInit } from '@angular/core';

import { faCoffee, faWineGlassAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  faCoffee = faWineGlassAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
