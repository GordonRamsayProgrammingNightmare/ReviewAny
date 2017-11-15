import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  
  customStyle = {
    selectButton: {
      "color": "black",
      "height":"2.3em",
      "border-radius":"0.2em",
      "background-color":"#3cc",
    },
    clearButton: {
      "color": "white",
      "background-color": "#CC0033",
      "height":"2.3em",
      "border-radius":"0.2em",
    },
    layout: {
      "background-image": "url('https://cdn0.iconfinder.com/data/icons/feather/96/camera-128.png')",
      "background-repeat":"no-repeat",
      "background-position":"center",
      "background-size":"20% 20%",
      "height":"20em",
      "background-color": "white",
      "color": "#gray",
      "font-size": "15px",
    },
    previewPanel: {
      
      "background-color": "#white",
    }
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  gotoHome(): void {
    this.router.navigate(['home']);
  }
}
