import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  textDir: string;

  constructor(private translate: TranslateService, private route: Router) {

    this.textDir = 'rtl'
    translate.setDefaultLang('he');
    translate.use('he');
  }

  changeDirection() {
    debugger;
    this.textDir = this.textDir == 'rtl' ? 'ltr' : 'rtl';
  }
}
