import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mint',
  templateUrl: './mint.component.html',
  styleUrls: ['./mint.component.scss']
})
export class MintComponent implements OnInit {

  constructor(private title:Title) {
  title.setTitle("Vi-ain | Mint Gratis | Vi-Labs | NFT");
  }
  ngOnInit(): void {
  }

}
