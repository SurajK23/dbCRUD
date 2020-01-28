import { Component, OnInit } from '@angular/core';
import { EmpManagerService } from '../../Services/emp-manager.service';
import { Emp } from 'src/app/Model/emp';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  
  constructor( private manager : EmpManagerService) { }
  emplist : Emp[];
  ngOnInit() {
    this.emplist = this.manager.getAll(); 
    //console.log(this.emplist);
  }

  delete(pos:number){
    this.manager.delete(pos);
  }

  edit(){
    
  }
}
