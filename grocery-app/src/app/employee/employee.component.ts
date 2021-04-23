import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeId?:number; //This will be used for login status
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Checks the employee's credentials to see whether they can access employee only features
   */
  validateInfo(username:string, password:string){
    //Make DB connection, 
    //check to make sure this passwor dis associated with this username
    //
  }
}
