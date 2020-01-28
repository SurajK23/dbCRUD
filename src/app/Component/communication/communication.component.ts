import { Component, OnInit } from '@angular/core';
import { Emp } from 'src/app/Model/emp';
import { EmpManagerService } from '../../Services/emp-manager.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {
  employee :Emp[]=[];
  constructor( private empdata : EmpManagerService) { }

  ngOnInit() {
    this.employee = this.empdata.getAll();
  }
  add(event){
    alert('this.parent'+ event);
  }
}
