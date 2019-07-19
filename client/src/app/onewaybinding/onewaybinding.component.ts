import { Component } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.css']
})
export class OnewaybindingComponent  {

  employees: any[]=[
    {
      "fname":"muskan",
      "lname":"ahuja",
      "age":59
    },
    {
      "fname":"shanky",
      "lname":"ahuja",
      "age":59
    },
    {
      "fname":"nanni",
      "lname":"ahuja",
      "age":59
    },
    {
      "fname":"dhruv",
      "lname":"ahuja",
      "age":59
    },
    {
      "fname":"ratan",
      "lname":"ahuja",
      "age":59
    }
  ]

  

}
