import { Component, OnInit } from '@angular/core';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'app-all-phonebook-entries',
  templateUrl: './all-phonebook-entries.component.html',
  styleUrls: ['./all-phonebook-entries.component.scss']
})
export class AllPhonebookEntriesComponent implements OnInit {

  phoneBookList:any = [];
  selected_contact:any = [];

  constructor(private _phonebook: PhonebookService) {
    
  }

  ngOnInit(): void {

  this._phonebook.getPhoneBook().subscribe((res:any)=>{
      this.phoneBookList = res;
  })
  }

 contactToDelete(id:any)
  {
    console.log(id);
    this._phonebook.deleteContact(id).subscribe((res)=>{
      console.log(res);
      
    })
  }
}

