import { Component, OnInit } from '@angular/core';
import { Emp } from 'src/app/Model/emp';
import { EmpManagerService } from '../../Services/emp-manager.service';

@Component({
  selector: 'app-emp-link',
  templateUrl: './emp-link.component.html',
  styleUrls: ['./emp-link.component.css']
})
export class EmpLinkComponent implements OnInit {
  employee : Emp[];
  //data : Emp;
  constructor( private empManager : EmpManagerService) { }

  ngOnInit() {
    this.employee = this.empManager.getAll();
  }
  
  detail(pos){
    //alert(pos);
    // this.data = this.empManager.getById(pos);
    // console.log(this.data);
  }
}
