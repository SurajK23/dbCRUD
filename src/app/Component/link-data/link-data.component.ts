import { Component, OnInit, Input } from '@angular/core';
import { Emp } from 'src/app/Model/emp';

@Component({
  selector: 'app-link-data',
  templateUrl: './link-data.component.html',
  styleUrls: ['./link-data.component.css']
})
export class LinkDataComponent implements OnInit {
  @Input() public empdata : Emp;
  constructor() { }

  ngOnInit() {
  }
  details(){
    console.log(this.empdata);
  }
}