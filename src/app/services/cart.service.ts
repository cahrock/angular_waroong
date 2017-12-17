import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';

@Injectable()
export class CartService {

  constructor(private http: Http) { }

  addItem(id: number, qty: number){
    console.log("Inside cart service")
    let url = AppConst.serverPath+"/cart/add";
    
    let cartItemInfo = {
      "bookId": id,
      "qty": qty
    }

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.post(url, cartItemInfo, {headers: tokenHeader});
  }

  getCartItemList(){
    let url = AppConst.serverPath+"/cart/get-cart-item-list";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
    
  }

  getShoppingCart(){
    let url = AppConst.serverPath+"/cart/get-shopping-cart";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
    return this.http.get(url, {headers: tokenHeader});
  }

  updateCartItem(cartItemId: number, qty: number){
    let url = AppConst.serverPath+"/cart/update-cart-item";
    
    let cartItemInfo = {
      "cartItemId": cartItemId,
      "qty": qty
    }

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
    return this.http.post(url, cartItemInfo, {headers: tokenHeader});
  }

  removeCartItem(id: number){
    let url = AppConst.serverPath+"/cart/remove-item";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
    return this.http.post(url, id, {headers: tokenHeader});
  }

}
