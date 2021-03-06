import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  @Input() name: string;
  @Input() id: string;

  constructor() {
    this.name = '';
    this.id = '';
  }

  ngOnInit(): void {
  }

}
