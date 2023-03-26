import { Component } from '@angular/core';
import { motoren } from './motoren/motoren';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mijn-voorbeeld';
  leeftijd = 35;
  eindStation = "Deventer";
  Status = "";

  updateLeeftijd()
  {
    this.eindStation = "Huis";
    this.Status = "HET IS WEER OKE";
  }

  letsGOOO()
  {
    this.title = "LETS GOOOOOOOOOOO";
    this.leeftijd = 55;
    this.Status = "weg"
    alert("LLLLEEEETTTTSSSS GOOOOOOOOO!!!!!!!!!");
  }

  VeranderText($event:any)
  {
    this.leeftijd = $event.target.value;
    this.Status = $event.target.value;
  }


  mot : motoren = new motoren();

  kanIkVeranderen()
  {
      let Honda : motoren = new motoren();
  }



}
