import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PhonebookService {
	[x: string]: any;

	constructor(private __http: HttpClient) { }

	url = "http://localhost:5000/api/phonebook";

	addNewPhonebook(phonebook: any){
		this.__http.post(`${this.url}`, phonebook).subscribe((res: any) => {
			console.log(res);
		}, (err: any) => {
			console.warn (err);
		});
	}
	getPhoneBook(){
		return this.__http.get(`${this.url}/`);
	}

	deleteContact(id: string) 
	{
		console.log(id);
		return this.__http.delete(`${this.url}/${id}`);
	}
}
	
