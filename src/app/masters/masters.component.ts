import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.scss']
})
export class MastersComponent implements OnInit {

  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
