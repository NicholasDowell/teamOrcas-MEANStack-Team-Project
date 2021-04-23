import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  orders:Array<Object> = new Array();
  constructor() { }

  ngOnInit(): void {
    //might be good to load up all the profile info here ...
  }
  /**
   * enerates a list of order data to be displayed in the HTML component
   * These are stored in the "orders" member variable
   */
  getOrderStatus(){
    //Make DB Connection
    //find Orders associated with currently logged in user
    //save those orders in a readable format
    //display them in the HTML component
  }
  /**
   * Edit Profile:
   */
  updateProfileInfo(newProfileInfo:any){
    // Makes a DB connection,
    // Get the ngForm data from HTML.
    // It changes this user's saved info in the db
  }
  logOut(){
    //redirects user back to the main page, and clears their "logged in" status
  }
  




}
