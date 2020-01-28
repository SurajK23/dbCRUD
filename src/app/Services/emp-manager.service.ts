import { Injectable } from '@angular/core';
import { EmpArrayDataService } from './emp-array-data.service';
import { Emp } from '../Model/emp';

@Injectable({
  providedIn: 'root'
})
export class EmpManagerService {

  constructor(private data : EmpArrayDataService) { }

  insert(postdata:Emp){
    this.data.empdata.push(postdata);
    console.log("Employee Addedd Successfully...");
  }

  delete(pos:number){
    this.data.empdata.splice(pos,1);
    console.log("Employee  of position "+pos+" Deleted Successfully...");
  }
  
  update(pos:number,postdata:Emp){
    this.data.empdata[pos] = postdata;
    console.log("Employee of position "+pos+" Updated Successfully...");
  }

  getAll(){
    return this.data.empdata;
    console.log("All Employees Fetched Successfully...");
  }

  getById(pos:number){
    return this.data.empdata[pos];
    //alert('ho');
    console.log("Employee of position "+pos+" Fetched Successfully...");
  }
}
