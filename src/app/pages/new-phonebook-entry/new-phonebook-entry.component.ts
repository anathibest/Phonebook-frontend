import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
	selector: 'app-new-phonebook-entry',
	templateUrl: './new-phonebook-entry.component.html',
	styleUrls: ['./new-phonebook-entry.component.scss']
})
export class NewPhonebookEntryComponent implements OnInit {
	todoService: any;
	refresh$: any;
	router: any;

	constructor(private __phonebook: PhonebookService) { }

	phonebookForm = new FormGroup({
		name: new FormControl(''),
		phone: new FormControl(''),
		email: new FormControl(''),
	})

	ngOnInit(): void {}

	submitPhoneBootEntry(){
		this.__phonebook.addNewPhonebook(this.phonebookForm.value);
	}

	ondelete(phonebook: PhonebookService): void {
        if (confirm('Are you sure you want to delete this item?')) {
            this.todoService.delete(phonebook.id).subscribe(() => {
                this.refresh$.next('');
                this.router.navigate(['/phonebook']);
            });
	}   
}
}
