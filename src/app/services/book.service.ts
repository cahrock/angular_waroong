import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';

@Injectable()
export class BookService {

  constructor(private http: Http) { }

  getBookList() {
    console.log("Inside book service")
  	let url = AppConst.serverPath+"/book/book-list";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }

  getBook(id:number) {
  	let url = AppConst.serverPath+"/book/"+id;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }

  searchBook(keyword:string) {
  	let url = AppConst.serverPath+"/book/search-book";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.post(url, keyword, {headers: tokenHeader});
  }

}
