import { Injectable } from '@angular/core';
import { Emp } from '../Model/emp';

@Injectable({
  providedIn: 'root'
})
export class EmpArrayDataService {

  empdata : Emp[] =[
    {
      empCode : 101,
      empName : 'Piyush',
      empEmail : 'piyush@getMaxListeners.com',
      empMobile : 9766524153,
      empDes :' Web Develpoper',
      empStatus : true,
      empSalary : 20000
    },
    {
      empCode : 201,
      empName : 'Eric',
      empEmail : 'eric@Listeners.com',
      empMobile : 97665245623,
      empDes :' Java Develpoper',
      empStatus : true,
      empSalary : 25000
    },
    {
      empCode : 301,
      empName : 'Suraj',
      empEmail : 'suraj@MaxListeners.com',
      empMobile : 9766565453,
      empDes :' HTML Develpoper',
      empStatus : true,
      empSalary : 20000
    }
  ];
}
