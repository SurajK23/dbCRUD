import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Emp } from 'src/app/Model/emp';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {EmpManagerService} from '../../Services/emp-manager.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {
@Output() onclick = new EventEmitter();
  constructor(private manager: EmpManagerService , private redirect:Router) { }

  ngOnInit() {
  }
  insertEmployee(empData:NgForm){
    let emp :Emp = {
      empCode : empData.value.empcode,
      empName : empData.value.empname,
      empEmail : empData.value.empemail,
      empMobile : empData.value.empmobile,
      empDes : empData.value.empdes,
      empStatus : empData.value.empstatus,
      empSalary : empData.value.empsalary
    }
    this.manager.insert(emp);
    this.redirect.navigate(['/list']);
    console.log(emp);
  }
  add(msg){
    //alert("this is child");
    this.onclick.emit(msg);
  }
}
