
import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from 'ionicons/dist/loader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = ' ';


  constructor() { }

  ngOnInit(): void {
    defineCustomElements(window);
  }}