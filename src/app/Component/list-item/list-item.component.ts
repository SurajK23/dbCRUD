import { Component, OnInit, Input } from '@angular/core';
import { Emp } from 'src/app/Model/emp';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input('parentdata') employeedata : Emp;
  
  constructor() { }

  ngOnInit() {
  }

}
