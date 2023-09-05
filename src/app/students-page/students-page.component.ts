import { Component } from '@angular/core';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent {

  public Students=[
    {"Name": "Azza", "Email": "azza1235@gmail.com", "Marks":58},
    {"Name": "Salim", "Email":"salkk321@gmail.com", "Marks":40},
    {"Name": "Khalid", "Email": "Khakid@gmail.com", "Marks":45},
    {"Name": "Sara", "Email": "saraSSS3@gmail.com", "Marks":68},
    {"Name": "Iman", "Email": "Im.an123@gmail.com", "Marks":70},
  ]

  
  backgroundImageUrl: string = 'assets\studentbg.jpg';
  headerStyles: any = {
    'color': 'blue',        // Default text color
    'font-size': '40px',    // Default font size
    'font-weight': 'bold',  // Default font weight
    'text-align': 'center'
  };
}