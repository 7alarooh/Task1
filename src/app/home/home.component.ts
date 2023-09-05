import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public name="Azza Al-Mahrooqi";

  

  userInput: string = ''; 

  updateH1() {
    
  }

  textboxStyles: any = {
    'border': '2px solid black',  // Default border style
    'font-size': '16px',         // Default font size
    'padding': '5px'             // Default padding
  };

  paragraphStyles: any = {
    'color': 'teal',       // Default text color
    'font-size': '30px',   // Default font size
    'font-weight': 'bold', // Default font weight
    'border':'2px solid Violet'
  };

}
