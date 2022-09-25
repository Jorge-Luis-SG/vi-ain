import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-web-component',
  templateUrl: './web-component.component.html',
  styleUrls: ['./web-component.component.scss'],
})
export class WebComponentComponent implements OnInit {
  @Input() logo: string = '';
  @Input() company: string = '';
  @Input() alt: string = '';

  ngOnInit(): void {}

  constructor() {}
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}
