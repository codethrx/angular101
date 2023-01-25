import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css'],
})
export class ParametersComponent implements OnInit {
  constructor(private active: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    console.log(this.active.snapshot.paramMap.get('id'));
  }
}
