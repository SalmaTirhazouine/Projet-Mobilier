import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from 'ionicons/dist/loader';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    defineCustomElements(window);
  }}