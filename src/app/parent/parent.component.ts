import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  pData: string;
  Cdata: any;
  constructor() { }

  ngOnInit(): void {
  }

  // person = [
  //   { name: 'tarun', age: 35, sex: 'mail', country: "uk" },
  //   { name: 'yougesh', age: 30, sex: 'mail', country: "delhi" },
  //   { name: 'prem', age: 25, sex: 'mail', country: "united stae" },
  //   { name: 'hari', age: 20, sex: 'mail', country: "harinagar" },
  //   { name: 'urmila', age: 15, sex: 'mail', country: "pakistan" }
  // ]

}
