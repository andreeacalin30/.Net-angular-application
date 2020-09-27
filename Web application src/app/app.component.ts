import { Component } from '@angular/core';
import { Settings } from './common/settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){}

  ngOnInit(){
    const settings = Settings.getInstance();
  }
}
