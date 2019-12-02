import { Component } from '@angular/core';

@Component({
  selector: 'stf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  appTitle = 'Money App';
  appTitleAux = '';

  clickMe(){
    alert("app nome foi alterado");
    this.appTitle = this.appTitleAux;
  }
}
