import { Component, OnInit } from '@angular/core';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
